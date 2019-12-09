const aws = require('aws-sdk');

const AWS_REGION = process.env.AWS_REGION;
const CONTENT_TYPE_DEFAULT = "application/json";
const S3_KEY_DEFAULT = "toBeUpload.json";

aws.config.update({
    region: AWS_REGION
});

const s3 = new aws.S3();

module.exports = {
    upload
}
//SQS EVENT
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

/**
 * uploads json file to SOURCE_BUCKET
 * @param {Object} event - an SNS event
 * @return {Promise} - a promise of the S3 putObject side effect
 */
async function upload(event) {
    try {
        const params = getS3Params(event);
        const res = await s3.putObject(params).promise();
        console.log('complete:', res);
    } catch (err) {
        throw new Error(err);
    }
}

//"{\n  \"Type\" : \"Notification\",\n  \"MessageId\" : \"6c7e07c1-3206-53b1-9bb2-51a9a7a021dc\",\n  \"TopicArn\" : \"arn:aws:sns:us-west-2:410986195230:BriansStack_topic\",\n  \"Subject\" : \"booga\",\n  \"Message\" : \"booooooga!!!!!!!\",\n  \"Timestamp\" : \"2019-12-09T18:33:10.738Z\",\n  \"SignatureVersion\" : \"1\",\n  \"Signature\" : \"EGVeKZEGWzBESB34N88c5H59x5enHLARUWjX/KP8zf1Xua4F85Q3WlBJ58b9iPTkhmyZAjwG/pubCBULLbu0gmJfoDENzNdWqmWY+pumGMoj7hm3jikKj4RcRRAtfSKH1xNUB93M8UlnKSbE1yssbb43uDp1rPVcoxI0d8PPH+uFhYnYsCCLbMpJoaVTNAWacD8fSWdC0/NtmH+4f/1DbIsrGcu5ENB1YA5cNie8fnG0zlTiqsx6obWdlUvusseSmD8u7eVZrFqK+BO6BblgazNsCcm9FOMTu2u4+UHOKGU2Hm7H5fErz5eJhQskQFkSmQkAD7ifZMi63tZ+eQqBlQ==\",\n  \"SigningCertURL\" : \"https://sns.us-west-2.amazonaws.com/SimpleNotificationService-6aad65c2f9911b05cd53efda11f913f9.pem\",\n  \"UnsubscribeURL\" : \"https://sns.us-west-2.amazonaws.com/?Action=Unsubscribe&SubscriptionArn=arn:aws:sns:us-west-2:410986195230:BriansStack_topic:a836b663-10b2-4e41-b507-4d4de728bf71\"\n}"

//HELPERS
/**
 * creates S3 params for uploading JSON file to SOURCE_BUCKET
 * @param {Object} event - an event object from SNS
 * @return {Object} - S3 Params
 */
function getS3Params(event) {
    return ({
        Body: JSON.stringify(getBodies(event.Records)),
        Bucket: process.env.SOURCE_BUCKET,
        Key: S3_KEY_DEFAULT,
        ContentType: CONTENT_TYPE_DEFAULT
    })
}

/**
 *  extracts bodies from SNS event records
 * @param {Array} records - an array from an SNS event
 * @return {Object} - an object literal with bodies as key and val as an array
 */
function getBodies(records) {
    const records_of_bodies = records.map((record) => {
        const {Subject,Message} =JSON.parse(record["body"])
        return {Subject,Message};
    });
    return {
        bodies: records_of_bodies
    }
}