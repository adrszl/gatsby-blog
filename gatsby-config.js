module.exports = {
    siteMetadata: {
      title: `Adrian Szlegel - Gatsby blog`,
      description: `Blog based od Gatsby`,
    },
    plugins: [
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: `${__dirname}/posts`,
          name: `posts`,
        },
      },
    ],
  };