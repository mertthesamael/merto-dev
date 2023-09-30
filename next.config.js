/** @type {import('next').NextConfig} */
const withNextIntl = require('next-intl/plugin')(
    // This is the default (also the `src` folder is supported out of the box)
    './i18n.ts'
  );
   
  module.exports = withNextIntl({
      images:{
          domains:['user-images.githubusercontent.com','camo.githubusercontent.com']
      }
    // Other Next.js configuration ...
  });

