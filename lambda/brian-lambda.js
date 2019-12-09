const s3_helper=require("../lib/aws/s3");


//TODO:
//s3 notification sent to sqs
//add check for S3 and sqs
exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  await s3_helper.upload(event);
}