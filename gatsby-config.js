const siteMetadata = {
  title: `Adrian Szlegel - Gatsby Blog`,
  description: `Adrian Szlegel - Test blog written in React and Gatsby`,
};

module.exports = {
    siteMetadata: siteMetadata,
    plugins: [
      `gatsby-plugin-styled-components`,
      {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.mdx`, `.md`],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: { path: `${__dirname}/posts`, name: `posts` },
      },
    ],
  };