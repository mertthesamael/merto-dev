/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
  );
   
  module.exports = withNextIntl({
    async headers() {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'X-Frame-Options', value: 'SAMEORIGIN' }
          ],
        },
      ]
    },
      images:{
        remotePatterns: [
          {
            protocol: "https",
            hostname: "user-images.githubusercontent.com"
          },
          {
            protocol: "https",
            hostname: "camo.githubusercontent.com"
          },
        ],
      }
    // Other Next.js configuration ...
  });

