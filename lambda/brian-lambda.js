const s3_helper=require("../lib/aws/s3");

exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  await s3_helper.upload(event);
}