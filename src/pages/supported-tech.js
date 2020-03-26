import React from "react";
import Layout from "@theme/Layout";

function TechRadar() {
  return (
    <Layout title="TechRadar">
      <iframe
        height="100%"
        width="100%"
        sandbox="allow-forms allow-popups allow-pointer-lock allow-same-origin allow-scripts"
        src="https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1nSSkvaZMZfXdwkNUNohrl3NYshppB6f-YURVFI5Uhu4%2Fedit%23gid%3D1985253373"
      ></iframe>
      ;
    </Layout>
  );
}

export default TechRadar;
