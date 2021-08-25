import React from "react";
import Layout from "../components/Layout";
import { graphql } from 'gatsby';

//this is a page component = query is insert diferently
//outside the component 

const Blog = ({data}) => {

  return (
    <Layout pageTitle="Blog" pageHeading="Blog">
        <ul>
          {data.allFile.nodes.map ((node) => {
              return <li key={node.id}>{node.name}</li>
          })}
        </ul>
    </Layout>  
  )
};

export const query = graphql `
query {
  allFile(filter: {sourceInstanceName: {eq: "blog"}}) {
    nodes {
      name
      id
    }
  }
}
`;


export default Blog;
