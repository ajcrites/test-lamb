import { S3 } from 'aws-sdk';
import fetch from 'node-fetch';

// Retrieve a placekitten image with the specified width and height and upload
// it to your specified S3 bucket for all to see
export async function uploadKitten(width, height) {
    const res = await fetch(`http://placekitten.com/${width}/${height}`);
    const Body = await res.buffer();

    return (new S3).putObject({
        Body,
        Bucket: process.env.BUCKET_NAME
        Key: `${width}x${height}.jpg`,
        ACL: 'public-read'
    }).promise();
}

// Run this file directly to test the upload functionality
if (require.main === module) {
    uploadKitten(process.env.TEST_KITTEN_WIDTH, process.env.TEST_KITTEN_HEIGHT);
}
