const aws = require('aws-sdk');
const AWS_REGION = process.env.AWS_REGION;

const dynamodb = new aws.DynamoDB({
    apiVersion: '2012-08-10'
})
const DYNAMO_TABLE_NAME = "BriansStackDocumentTable"
module.exports = {
    createS3Document
}




async function createS3Document(s3Data) {
        const params = {
            Item: {
                "BucketName": {
                    S: s3Data.bucket.name
                },
                "BucketARN": {
                    S: s3Data.bucket.arn
                },
                "ObjectKey": {
                    S: s3Data.object.key
                }
            },
            TableName: DYNAMO_TABLE_NAME
        }
      const res=  await dynamodb.putItem(params).promise().catch(err=>{throw new Error(err)});
      console.log(res)
    
}