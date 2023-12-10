import React from "react";
import Layout from "../Layout";
import Carousel from "../carousel";
import AboutUsContainer from "./about-us";
import AdminMessage from "./admin-message";
import Facilities from "./facilities";
import Notices from "./notices";
import Counter from "./counter";
export default function Home() {
  return (
    <Layout>
      <Carousel />
      <AboutUsContainer />
      <AdminMessage />
      <Facilities />
      <Notices />
      <Counter />
    </Layout>
  );
}
