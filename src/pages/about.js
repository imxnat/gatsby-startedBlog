import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const AboutPage = () => {
  return (
    <Layout pageTitle="About me" pageHeading="About me">
        
        <StaticImage
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1053&q=80"
          alt="About informacion"
          loading="eager"
          placeholder="blurred"
          layout="constrained"
          width={500}
          height={150}
        />
        <p>
          Lorem ipsum es el texto que se usa habitualmente en diseño gráfico en demostraciones de tipografías o de borradores de diseño para probar el diseño visual antes de insertar el texto final.
        </p>
    </Layout>
    
    
  )
}


export default AboutPage;
