module.exports = {
  title: "Glasswall SRE",
  tagline: "Helping create scalable and reliable products at Glasswall!",
  favicon: "img/favicon.ico",
  organizationName: "glasswall-sre", // Usually your GitHub org/user name.
  projectName: "glasswall-sre.github.io", // Usually your repo name.
  url: "https://https://glasswall-sre.github.io/",
  baseUrl: "/",
  onBrokenLinks: "warn",
  themeConfig: {
    algolia: {
      apiKey: "#{sre-site-algolia-api-key}#",
      indexName: "glasswallsolutions_sre",
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: "Glasswall SRE",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        { to: "docs/sre/what-is-sre", label: "Docs", position: "left" },
        {
          to: "docs/products/rebuild-email/introduction",
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
            "https://github.com/glasswall-sre/glasswall-sre.github.io",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
