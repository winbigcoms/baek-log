/** @type {import('next').NextConfig} */

if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: './config/.env.development' });
} else {
  require('dotenv').config({ path: './config/.env.production' });
}

const nextConfig = {
  reactStrictMode: true,
  env: {
    EDITOR_KEY: process.env.EDITOR_KEY
  }
};

module.exports = nextConfig;
