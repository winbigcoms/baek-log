/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: './config/.env.development' });
}

const withTM = require('next-transpile-modules')();

const nextConfig = {
  env: {
    EDITOR_KEY: process.env.EDITOR_KEY,
    AWS_IMG_BUCKET: process.env.AWS_IMG_BUCKET,
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_ID: process.env.AWS_ACCESS_ID,
    AWS_ACCSES_PW: process.env.AWS_ACCSES_PW,
    LOA_KEY: process.env.NEXT_PUBLIC_LOA_KEY
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'baek-log-img.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/projects/**'
      },
      {
        protocol: 'https',
        hostname: 'img.lostark.co.kr',
        port: '',
        pathname: '/armory/**'
      }
    ]
  },
  compiler: {
    styledComponents: true
  }
};

module.exports = withTM(nextConfig);
