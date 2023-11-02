module.exports = {
  siteUrl: 'https://www.white-win.dev',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/'
      }
    ]
  },
  outDir: './out'
};
