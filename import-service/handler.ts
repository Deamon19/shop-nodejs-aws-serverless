import AWS from 'aws-sdk';
import * as handlers from './src';

const s3 = new AWS.S3();

export const importFileParser = handlers.importFileParser();

export const importProductsFile = handlers.importProductsFile({
    s3,
});
