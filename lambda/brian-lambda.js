const s3_helper=require("../lib/aws/s3");
const dynamodb_helper = require("../lib/aws/dynamoDB")

function getParsedBody(event){
  return JSON.parse(event.Records[0].body)
}
function isS3Event(parsedBody){
  return parsedBody && parsedBody.Records;
}
function logS3Details(parsedBody){
    console.log(parsedBody.Records[0].s3);
}
function getS3Details(parsedBody){
  return parsedBody.Records[0].s3
}

exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  const parsedBody = getParsedBody(event)
  if(isS3Event(parsedBody)){
    logS3Details(parsedBody);
    console.log(JSON.stringify(getS3Details(parsedBody)))
    await dynamodb_helper.createS3Document(getS3Details(parsedBody))  //upload s3 details to dynamodb
  }else{  
    await s3_helper.upload(event);
  }
  
}