import React from "react";
import Layout from "@theme/Layout";

function TechRadar() {
  return (
    <Layout title="TechRadar">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
      >
        <iframe src="https://radar.thoughtworks.com/?sheetId=https%3A%2F%2Fdocs.google.com%2Fspreadsheets%2Fd%2F1nSSkvaZMZfXdwkNUNohrl3NYshppB6f-YURVFI5Uhu4%2Fedit%23gid%3D1985253373"></iframe>
        ;
      </div>
    </Layout>
  );
}

export default TechRadar;
