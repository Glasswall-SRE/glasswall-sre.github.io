module.exports = {
  title: "Glasswall SRE",
  tagline: "Helping create scalable and reliable products at Glasswall!",
  url: "https://your-docusaurus-test-site.com",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "Glasswall", // Usually your GitHub org/user name.
  projectName: "SRE", // Usually your repo name.
  themeConfig: {
    navbar: {
      title: "Glasswall SRE",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg"
      },
      links: [
        { to: "docs/sre/what-is-sre", label: "Docs", position: "left" },
        {
          to: "docs/products/filetrust-email/introduction",
          label: "Products",
          position: "left"
        },
        { to: "supported-tech", label: "Supported Tech", position: "left" },
        {
          href: "https://github.com/Glasswall-SRE",
          label: "GitHub",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "What is SRE",
              to: "docs/sre/what-is-sre"
            },
            {
              label: "Products",
              to: "docs/products/filetrust-email"
            }
          ]
        },
        {
          title: "Community",
          items: [
            {
              label: "Medium",
              href: "https://medium.com/glasswall-engineering"
            }
          ]
        },
        {
          title: "Social",
          items: [
            {
              label: "Blog",
              to: "blog"
            },
            {
              label: "GitHub",
              href: "https://github.com/Glasswall-SRE"
            },
            {
              label: "Twitter",
              href: "https://twitter.com/GlasswallGlobal"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Glasswall SRE. Built with Docusaurus.`
    }
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          editUrl:
            "https://dev.azure.com/glasswall/Glasswall%20Cloud/_git/Glasswall.SRE.Documentation?path=%2F"
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};
