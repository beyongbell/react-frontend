require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});

const strapiConfig = {
  apiURL: process.env.STRAPI_API_URL,
  accessToken: process.env.STRAPI_TOKEN,
  collectionTypes: ['product', 'category', 'variant'],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
  ],
}
