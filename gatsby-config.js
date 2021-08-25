module.exports = {
  siteMetadata: {
    title: `Gatsby Blog`,
  },

  plugins: [ 
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-gatsby-cloud`,
    //source plugin
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "blog",
        path: `${__dirname}/blog`,
      }
    }
  ],
}
