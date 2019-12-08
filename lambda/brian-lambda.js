const s3_helper=require("../lib/aws/s3");

// aws.config.update({
//   region: AWS_REGION
// });
// const s3 = new aws.S3();

// const CONTENT_TYPE_DEFAULT = "application/json";
// const S3_KEY_DEFAULT = "toBeUpload.json";
//EVENT
// {
//   "Records": [{
//       "messageId": "8204ff55-039f-41e9-b9bf-54c24ab2471b",
//       "receiptHandle": "AQEBaHVU10/VLgu4XXbp2Z4J2EJstTBeAQX7QwtcQcK3dUXbtn/o2vHT99meAROaAYTbF38fNon3M96kv9/UdKF2jo0aG52myugQto+YQDW4YZFykBR9fFzBkdd6V+qoBojs94Zbs3m2UeYqj3GuxdJVK0+WU5lTcYncB3hpPyf1+0aLCaG+uk+YRgvsPnw2IKJQq9zV2ZPbJCYdW3/UkoaVd2tUiHMS1LjK5hLbH8Y/eWLAm10fVLxzg+SW9Imbrlet3HPm7TcvFeMD2/uDKCSdVOXy3qASrX894DGRyR8V3Jdd6bfHu1KkRQlD0sMHMX+t+Vkfk3cPEYe4uNpPy+sIlyE1vmIsZFdVJp7gLcbmDgCUGtMx9/VGDQINyeNXHQuxJnOHbSO1XUBxw0yEMVYPJA==",
//       "body": "{\n  \"Type\" : \"Notification\",\n  \"MessageId\" : \"af604227-728e-5bdb-be8a-14404fd0120c\",\n  \"TopicArn\" : \"arn:aws:sns:us-west-2:410986195230:BriansStack_topic\",\n  \"Subject\" : \"plzz work\",\n  \"Message\" : \"plzzzzzzzzzz\",\n  \"Timestamp\" : \"2019-12-08T18:04:14.001Z\",\n  \"SignatureVersion\" : \"1\",\n  \"Signature\" : \"Cpfa+rwug/j7ZJ8/+vVolSuwfNy+UZAkO+AY1kv/gcCzjwl8sdCxa2u3/Wnb2hSPo4JHNU+TVNTAa+rihhPaPE9Zmhepj8dlWgofZSJR+jKW7qaMszs5VXEIC3NF7nDsrEobHxYZ7UhPTYEDe3J0G1J3Y1NhK+1jWgKB6NMhUif8ZdcVzC0aFYRH9jzBa5/6/fmuK/MAqc2jhgxqJqZaVLzJImoGXgm7Jt6EDWavEsPYzlekVtbS3/9Z8Fssxf+SEp0aPn6M0lZ9VXJn/FmIf9kSiRSq10oW3/NQYolTmcd3BSg0M2APGg0baYjuQTKFWOz4s8k6tIyN/zLxZ/4DrA==\",\n  \"SigningCertURL\" : \"https://sns.us-west-2.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem\",\n  \"UnsubscribeURL\" : \"https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:410986195230:BriansStack_topic:e53a29bb-76d1-4415-89a2-a31903ec4d48\"\n}",
//       "attributes": {
//           "ApproximateReceiveCount": "1",
//           "SentTimestamp": "1575828254031",
//           "SenderId": "AIDAIYLAVTDLUXBIEIX46",
//           "ApproximateFirstReceiveTimestamp": "1575828269031"
//       },
//       "messageAttributes": {},
//       "md5OfBody": "9204fd963868a8f671fbe75faaf684cd",
//       "eventSource": "aws:sqs",
//       "eventSourceARN": "arn:aws:sqs:us-west-2:410986195230:BriansStack_Queue",
//       "awsRegion": "us-west-2"
//   }]
// }



// function getBodies(records) {
//   const records_of_bodies= records.map((record) => {
//     return record["body"]
//   });
//   return {bodies:records_of_bodies}
// }

// function getS3Params(event) {
//   return ({
//     Body: JSON.stringify(getBodies(event.Records)),
//     Bucket: process.env.SOURCE_BUCKET,
//     Key: S3_KEY_DEFAULT,
//     ContentType: CONTENT_TYPE_DEFAULT
//   })
// }

exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  // try {
  //   const params = getS3Params(event);
  //   const res = await s3.putObject(params).promise();
  //   console.log('complete:', res);
  // } catch (err) {
  //   throw new Error(err);
  // }
  await s3_helper.upload(event);
}