require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Máy may Nghĩa`,
    description: `Chuyên bán & sửa máy may, máy vắt sổ, máy kansai, bàn ủi hơi nước các loại`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    "gatsby-plugin-mdx",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "info",
        path: `${__dirname}/src/content/info/`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
        tailwind: true,
      },
    },
    {
      resolve: `gatsby-source-medusa`,
      options: {
        storeUrl:
          process.env.GATSBY_MEDUSA_BACKEND_URL || `http://localhost:9000`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/icons/logo.png',
      },
    },
  ],
}
