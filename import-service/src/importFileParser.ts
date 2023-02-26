const AWS = require('aws-sdk');
const csv = require('csv-parser');
const removeBOM = require('remove-bom-stream')
const s3 = new AWS.S3({ region: 'eu-west-3' })

export const importFileParser = () => async (event) => {
    const srcBucket = event.Records[0].s3.bucket.name;
    const srcKey = event.Records[0].s3.object.key;
  
    const destBucket = srcBucket;
    const destKey = 'parsed/' + srcKey.split('/').pop();
  
    try {
      // Get the object using a readable stream
      const objectStream = s3.getObject({
        Bucket: srcBucket,
        Key: srcKey
      }).createReadStream();
  
      // Parse the CSV data using csv-parser
      const parsedData = [];
  
      await new Promise((resolve, reject) => {
        objectStream
          .pipe(removeBOM('utf-8'))
          .pipe(csv())
          .on('data', (data) => {
            parsedData.push(data);
          })
          .on('end', () => {
            console.log(`Parsed ${parsedData.length} rows from ${srcKey}`);
            resolve(parsedData);
          })
          .on('error', (err) => {
            console.error(`Error parsing ${srcKey}: ${err}`);
            reject(err);
          });
      });
  
      // Upload the parsed data to the new location
      await s3.upload({
        Bucket: destBucket,
        Key: destKey,
        Body: JSON.stringify(parsedData),
        ContentType: 'application/json'
      }).promise();
  
      // Delete the original object from the source location
      await s3.deleteObject({
        Bucket: srcBucket,
        Key: srcKey
      }).promise();
  
      console.log(`Successfully moved ${srcKey} to ${destKey}`);
    } catch (err) {
      console.error(`Error moving ${srcKey}: ${err}`);
      throw err;
    }
}
