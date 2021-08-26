import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { postContainer } from "./post.module.css";

const IndexPage = () => {
  return (
    <Layout pageTitle="Home Page" pageHeading="Home Page">
        <StaticImage
          className={postContainer}
          src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGV2fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
          alt="Home page picture"
          loading="eager"
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={200}
        />
        <p>I am making this by following the Gatsby tutorial.</p>

    </Layout>
    
    
  )
}


export default IndexPage;
