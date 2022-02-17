import { NextApiRequest, NextApiResponse } from 'next';

import AWS from 'aws-sdk';

export default async function imgUpload(req: NextApiRequest, res: NextApiResponse) {
  const config = {
    accessKeyId: process.env.AWS_ACCESS_ID,
    secretAccessKey: process.env.AWS_ACCSES_PW,
    region: process.env.AWS_REGION,
    signatureVersion: 'v4'
  };

  const filename = req.query.filename;
  const category = req.query.category;

  const time = Date.now();

  const uploadTitle = `${category}/${time}-${filename.replace(/\s/g, '-')}`;

  const s3 = new AWS.S3(config);

  const uploadUrl = await s3.getSignedUrlPromise('putObject', {
    Bucket: process.env.AWS_IMG_BUCKET,
    Key: uploadTitle,
    Expires: 60
  });

  res.send({ url: uploadUrl });
}
