module.exports = {
  docs: [
    {
      type: "category",
      label: "SRE",
      items: ["sre/what-is-sre", "sre/slo-slis", "sre/error-budget-policy"]
    },
    {
      type: "category",
      label: "Incident and Monitoring",
      items: [
        "incident-monitoring/incident-classification",
        "incident-monitoring/incident-management"
      ]
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
