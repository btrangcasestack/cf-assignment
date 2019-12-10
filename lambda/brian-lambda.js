const s3_helper=require("../lib/aws/s3");

const S3_EVENT_SOURCE="aws:s3"
//**********SNS */
// {
//     "Records": [
//         {
//             "messageId": "8b5f6b26-2beb-4a96-adc9-298dd1d17538",
//             "receiptHandle": "AQEBqA1S+OYBwvWJlQT9BYY0HRHTC3ShHvjidfQS7HBCLYidC4/eyHQrl9nWW9Dwf0d4YqJeRhBg+NHsKh+s7704fh0sMvzgmnW82+xgEzySdQVEte0/VAdg3J8tXl5x908IdMc7KGSjDUTrheD/aMeZqNUAwgwieG2k2rmqDUJk4BOYWH6T3NeGZMgspfNNMQnmZrU2IMCiLLD3/ReooIyKTpSVzgaQXI6SkjtDAqng3zg6M0vZ8jHnfXWkWsOJGt56AiFu1t2oqZiTTE76KKW97f4OHvJdcJEyXluFbqVqPDvGMhf2k7WDlpnFbPAaJQWr2cFT7QPLGMzYqLE8QkfqA2B9U3ssjPHXf4k1Kk2unpmpJYJ0hzIvhdpCbvdDQk98N6wzzCcVF79HEQB6EyK+Gw==",
//             "body": "{\n  \"Type\" : \"Notification\",\n  \"MessageId\" : \"6c7e07c1-3206-53b1-9bb2-51a9a7a021dc\",\n  \"TopicArn\" : \"arn:aws:sns:us-west-2:410986195230:BriansStack_topic\",\n  \"Subject\" : \"booga\",\n  \"Message\" : \"booooooga!!!!!!!\",\n  \"Timestamp\" : \"2019-12-09T18:33:10.738Z\",\n  \"SignatureVersion\" : \"1\",\n  \"Signature\" : \"EGVeKZEGWzBESB34N88c5H59x5enHLARUWjX/KP8zf1Xua4F85Q3WlBJ58b9iPTkhmyZAjwG/pubCBULLbu0gmJfoDENzNdWqmWY+pumGMoj7hm3jikKj4RcRRAtfSKH1xNUB93M8UlnKSbE1yssbb43uDp1rPVcoxI0d8PPH+uFhYnYsCCLbMpJoaVTNAWacD8fSWdC0/NtmH+4f/1DbIsrGcu5ENB1YA5cNie8fnG0zlTiqsx6obWdlUvusseSmD8u7eVZrFqK+BO6BblgazNsCcm9FOMTu2u4+UHOKGU2Hm7H5fErz5eJhQskQFkSmQkAD7ifZMi63tZ+eQqBlQ==\",\n  \"SigningCertURL\" : \"https://sns.us-west-2.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem\",\n  \"UnsubscribeURL\" : \"https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:410986195230:BriansStack_topic:a836b663-10b2-4e41-b507-4d4de728bf71\"\n}",
//             "attributes": {
//                 "ApproximateReceiveCount": "1",
//                 "SentTimestamp": "1575916390793",
//                 "SenderId": "AIDAIYLAVTDLUXBIEIX46",
//                 "ApproximateFirstReceiveTimestamp": "1575916405794"
//             },
//             "messageAttributes": {},
//             "md5OfBody": "664bca05f3b70325bc706a38d42ea723",
//             "eventSource": "aws:sqs",
//             "eventSourceARN": "arn:aws:sqs:us-west-2:410986195230:BriansStack_Queue",
//             "awsRegion": "us-west-2"
//         }
//     ]
// }



/***S3 EVENT */
// {
//     "Records": [
//         {
//             "messageId": "62cd9ecc-9c61-4990-8dfe-edafee54aeab",
//             "receiptHandle": "AQEBlFYc/gIr+ZMhCuHV1222D9pIDc+VYotpO26jqWttJEJyzvbO1hq+uQ+wbTap6uRvNG+e/uwLEG8oAGEU0zpMFvfataPA4bCgDbCi+NNqqNMLDhFTaCEzOtn7BS0LLJLm6OgLtja2R6d8E+XlFQKz5vvRYl+74WZCNFj3YU7qqbtsQyL22bH36iJg4w/+l+jEwk8lXeNSxzKS1CJ1DwHmjVnqE04xJHDfp7sgIV7dx59llp1Jr7JgTJF30hmHj6nJ+pj99gTOukC78iRFVQmcs2wJLbq6eIc++wVTYtMUGg2RpIheZGweUsFK+Yk6XE7lBptVg9fv+gfp8fz9O5BAmMJWj6fdK06PHJ2mg04GjpR9YOINijzoxQ7zKW4qeVfwqXZ0NUjfnRKz10YjRFBJzQ==",
//             "body": "{\"Records\":[{\"eventVersion\":\"2.1\",\"eventSource\":\"aws:s3\",\"awsRegion\":\"us-west-2\",\"eventTime\":\"2019-12-09T20:00:43.299Z\",\"eventName\":\"ObjectCreated:Put\",\"userIdentity\":{\"principalId\":\"AWS:AROAV7MFPVEPNPPTLN4CM:BriansStack_logger\"},\"requestParameters\":{\"sourceIPAddress\":\"34.212.139.85\"},\"responseElements\":{\"x-amz-request-id\":\"71B34C242CA9C6B2\",\"x-amz-id-2\":\"LR/Q3sgN/oNjcdoX0MNPsGvgxQusmL0i2vvhr9c/ols7/h5X0sAyNbYS92JKibDcWY6wFde9qB0=\"},\"s3\":{\"s3SchemaVersion\":\"1.0\",\"configurationId\":\"b76baa8f-143e-4398-952f-207506932efc\",\"bucket\":{\"name\":\"brian-hippogriff-bucket\",\"ownerIdentity\":{\"principalId\":\"A3TNSYA7C7OMS3\"},\"arn\":\"arn:aws:s3:::brian-hippogriff-bucket\"},\"object\":{\"key\":\"toBeUpload.json\",\"size\":15,\"eTag\":\"64e3692bd4ea473e7aba30b2e7883069\",\"sequencer\":\"005DEEA7EB403DB48B\"}}}]}",
//             "attributes": {
//                 "ApproximateReceiveCount": "1",
//                 "SentTimestamp": "1575921643693",
//                 "SenderId": "AIDAJFWZWTE5KRAMGW5A2",
//                 "ApproximateFirstReceiveTimestamp": "1575921658693"
//             },
//             "messageAttributes": {},
//             "md5OfBody": "e839bf650f38aa83edb6ccbaa19d9c3c",
//             "eventSource": "aws:sqs",
//             "eventSourceARN": "arn:aws:sqs:us-west-2:410986195230:BriansStack_Queue",
//             "awsRegion": "us-west-2"
//         }
//     ]
// }
//TODO:
//s3 notification sent to sqs
//add check for S3 and sqs
//Records >> body >> s3 >> bucket >> object >> key

function getParsedBody(event){
  return JSON.parse(event.Records[0].body)
}
function isS3Event(parsedBody){
  return parsedBody && parsedBody.Records;
}
function logS3Details(parsedBody){
    console.log(parsedBody.Records[0].s3);
}

exports.handler = async function (event, context) {
  console.log(JSON.stringify(event))
  const parsedBody = getParsedBody(event)
  if(isS3Event(parsedBody)){
    logS3Details(parsedBody);
  }else{  
    await s3_helper.upload(event);
  }
  
}