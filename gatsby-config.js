module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webapp",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet",
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'svg']
      }
    }
  ],
};
