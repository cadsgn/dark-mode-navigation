module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "webapp",
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-react-helmet", 
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: "Montserrat",
              variants: ["300", "400", "600"],
              subsets: ['latin'],
              fontDisplay: 'optional',
            },
            {
              family: "Orelega One",
              variants: ["400"],
              subsets: ['latin'],
              fontDisplay: 'optional',
            },
          ],
        },
        formats: ['woff2'],
        useMinify: true,
        usePreload: true,
        usePreconnect: true,
      },
    },
  ],
};
