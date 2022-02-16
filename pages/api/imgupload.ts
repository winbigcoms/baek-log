import nextConnect from 'next-connect';

import AWS from 'aws-sdk';

const app = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `img upload error ${error.massage}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: 'not allow' });
  }
});

const makeRoute = options => {
  const router = async (req, res) => {
    const config = {
      accessKeyId: process.env.AWS_ACCESS_ID,
      secretAccessKey: process.env.AWS_ACCSES_PW,
      region: process.env.AWS_REGION
    };

    const bucket = process.env.AWS_IMG_BUCKET;

    const filename = req.query.filename;
    const category = req.query.category;
    const nowDate = Date.now();

    const key = `category/${nowDate}/${filename.replace(/\s/g, '-')}`;

    const policy = {
      Statment: [
        {
          Sid: 'Stmt1S3UploadAssets',
          Effect: 'Allow',
          Action: ['s3:PutObject', 's3:PutObjectAcl'],
          Resource: [`arn:aws:s3:::${bucket}/${key}`]
        }
      ]
    };

    const sts = new AWS.STS(config);

    const token = await sts
      .getFederationToken({
        Name: 'S3UploadWebToken',
        Policy: JSON.stringify(policy),
        DurationSeconds: 60 * 60 // 1 hour
      })
      .promise();

    res.json({
      token,
      key,
      bucket,
      region: process.env.AWS_REGION
    });
  };
};

const apiRouter = makeRoute();

export { APIRoute:apiRouter }