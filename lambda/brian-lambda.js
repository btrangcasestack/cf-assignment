const aws = require("aws-sdk")
const s3 = new aws.S3();






exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  const params = {
    Body: JSON.stringify(event),
    Bucket: process.env.SOURCE_BUCKET,
    Key: "toBeUpload.json",
    ContentType: "application/json"
  };
  try {
    const res = await s3.putObject(params).promise();
    console.log('complete:', res);
  } catch(err) {
    throw new Error(err);
  }
}