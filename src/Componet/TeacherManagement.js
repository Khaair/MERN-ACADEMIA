import React, { useState, useEffect } from "react";
import Layout from "../layout";

export default function TecherManagement() {
  const [count, setCount] = useState(0);

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${count} times`;
  });

  return (
    <Layout>
      <div className="card mt-3">Teacher Manage</div>
    </Layout>
  );
}
