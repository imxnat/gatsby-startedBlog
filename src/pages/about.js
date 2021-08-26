import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { postContainer } from "./post.module.css";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me" pageHeading="About me">
        
        <StaticImage
          className={postContainer}
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1051&q=80"
          alt="About informacion"
          loading="eager"
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={200}
        />
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </p>
    </Layout>
    
    
  )
}


export default AboutPage;
