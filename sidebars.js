module.exports = {
  docs: [
    {
      type: "category",
      label: "About",
      items: ["about/what-is-sre", "about/sre-concepts"]
    },
    {
      type: "category",
      label: "Products",
      items: [
        {
          type: "category",
          label: "FileTrust Email",
          items: [
            "products/filetrust-email/introduction",
            "products/filetrust-email/slos",
            "products/filetrust-email/data-management",
            "products/filetrust-email/releases",
            "products/filetrust-email/logging-retention"
          ]
        }
      ]
    },
    {
      type: "category",
      label: "Standards",
      items: ["standards/software"]
    }
  ]
};
