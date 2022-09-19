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
    title: `VAR-X`,
    description: `The premier developer clothing line. By developers, for developers. High quality, custom-designed shirts, hats, and hoodies.`,
    author: `Thinnakorn Joompee`,
    keywords: [
      "clothing",
      "developer",
      "programmer",
      "coding",
      "code",
      "websites",
      "web developer",
      "hats",
      "shirts",
      "hoodies",
    ],
    siteUrl: "https://formstorm.design",
    twitterUsername: "@thinnakorn",
    defaultImage: "",
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@src": "src",
          "@components": "src/components",
          "@layouts": "src/layouts",
          "@pages": "src/pages",
          "@templates": "src/templates",
          "@images": "src/images",
        },
        extensions: []
      }
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: [
            "Philosopher:700:latin",
            "Montserrat:700,600,500,400,300:latin",
          ],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`, // Needed for dynamic images
  ],
}
