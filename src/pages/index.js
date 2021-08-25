import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" pageHeading="Home Page">
        <StaticImage
          src="../assets/home-image.png"
          alt="Profile picture of myself"
          loading="eager"
          placeholder="blurred"
          layout="constrained"
          width={200}
          height={200}
        />
        <p>I am making this by following the Gatsby tutorial.</p>

    </Layout>
    
    
  )
}


export default IndexPage;
