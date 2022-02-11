import nextConnect from 'next-connect';

const AWS = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

const app = nextConnect({
  onError(error, req, res) {
    res.status(501).json({ error: `img upload error ${error.massage}` });
  },
  onNoMatch(req, res) {
    res.status(405).json({ error: 'not allow' });
  }
});

AWS.config.region = process.env.AWS_REGION;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: process.env.AWS_POOL_ID
});

const upload = multer({
  storeage: multerS3({
    s3: new AWS.S3(),
    bucket: process.env.AWS_IMG_BUCKET,
    acl: 'public-read',
    key(req, file, cb) {
      console.log(file);
      const nowDate = Date.now();

      cb(null, `origin/${nowDate}_${file.originalname}`);
    }
  })
});

app.post(upload.single('image'), (req, res) => {
  return res.json(req.files?.map(v => v.loaction));
});

export default app;
