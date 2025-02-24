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
          {
            protocol: "https",
            hostname: "static.tildacdn.com"
          },
          {
            protocol: "https",
            hostname: "res.cloudinary.com"
          },
          {
            protocol: "https",
            hostname: "mediashotz.co.uk"
          },
         
        ],
      },
      async redirects() {
        return [
          {
            source: '/metrics',
            destination: 'https://cm7iv1h96000boksuq55in23s-signal.usehardal.com/metrics',
            permanent: true,
          },
        ]
      },
    // Other Next.js configuration ...
  });

