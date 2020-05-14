module.exports = {
  title: "Glasswall SRE",
  tagline: "Helping create scalable and reliable products at Glasswall!",
  favicon: "img/favicon.ico",
  organizationName: "glasswall-sre", // Usually your GitHub org/user name.
  projectName: "sre-documentation-site", // Usually your repo name.
  url: "https://https://glasswall-sre.github.io/",
  baseUrl: "/sre-documentation-site/",
  themeConfig: {
    algolia: {
      apiKey: "#{sre-site-algolia-api-key}#",
      indexName: "glasswallsolutions_sre",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    disableDarkMode: true,
    navbar: {
      title: "Glasswall SRE",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      links: [
        { to: "docs/sre/what-is-sre", label: "Docs", position: "left" },
        {
          to: "docs/products/filetrust-email/introduction",
          label: "Products",
          position: "left",
        },
        { to: "supported-tech", label: "Supported Tech", position: "left" },
        {
          href: "https://medium.com/glasswall-engineering",
          label: "Medium",
          position: "right",
        },
        {
          href: "https://github.com/Glasswall-SRE",
          label: "GitHub",
          position: "right",
        },
      ],
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://dev.azure.com/glasswall/Glasswall%20Cloud/_git/Glasswall.SRE.Documentation?path=%2F",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
