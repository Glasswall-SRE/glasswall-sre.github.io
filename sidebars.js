module.exports = {
  docs: [
    {
      type: "category",
      label: "SRE",
      items: ["sre/what-is-sre", "sre/slo-slis", "sre/error-budget-policy", "sre/failure-friday"]
    },
    {
      type: "category",
      label: "Production",
      items: [
        "production/journey-to-production",
        "production/production-readiness-review"
      ]
    },
    {
      type: "category",
      label: "Incident and Monitoring",
      items: [
        "incident-monitoring/incident-classification",
        "incident-monitoring/incident-management",
        "incident-monitoring/monitoring"
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
            "products/filetrust-email/releases",
            "products/filetrust-email/logging-retention",
            "products/filetrust-email/incident-events",
            {
              type: "category",
              label: "Security Policy",
              items: [
                "products/filetrust-email/security-policy/data-management"
              ]
            }
          ]
        },
        {
          type: "category",
          label:"Rebuild API",
          items:[
            "products/rebuild-api/PRR"
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
