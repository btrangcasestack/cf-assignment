const aws = require('aws-sdk');

const AWS_REGION = process.env.AWS_REGION;
const CONTENT_TYPE_DEFAULT = "application/json";
const S3_KEY_DEFAULT = "toBeUpload.json";

aws.config.update({
    region: AWS_REGION
  });

const s3 = new aws.S3();

module.exports={
    upload
}

/**
 * uploads json file to SOURCE_BUCKET
 * @param {Object} event - an SNS event
 * @return {Promise} - a promise of the S3 putObject side effect
 */
async function upload(event){
    try {
        const params = getS3Params(event);
        const res = await s3.putObject(params).promise();
        console.log('complete:', res);
      } catch (err) {
        throw new Error(err);
      }
}



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
    const records_of_bodies= records.map((record) => {
      return record["body"]
    });
    return {bodies:records_of_bodies}
  }
  
