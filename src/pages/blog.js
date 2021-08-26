import React from "react";
import Layout from "../components/Layout";
import { graphql } from 'gatsby';
import { MDXRenderer } from "gatsby-plugin-mdx";
import { postContainer } from "./post.module.css";
//this is a page component = query is insert diferently
//outside the component 

const Blog = ({data}) => {

  return (
    <Layout pageTitle="Blog" pageHeading="Blog">
        <ul>
          {data.allMdx.nodes.map ((node) => 
          {
              return <article key={node.id} className={postContainer}>
                <h2>{node.frontmatter.title}</h2>
                <p>{node.frontmatter.date}</p>
                {/* // componente de MDX que renderiza este formato */}
                <MDXRenderer>{node.body}</MDXRenderer>
              </article>;
          })}
        </ul>
    </Layout>  
  )
};

export const query = graphql `
query {
  allMdx(sort: {order: DESC, fields: frontmatter___date}) {
    nodes {
      frontmatter {
        date(formatString: "ddd, MMM Do YYYY")
        title
      }
      id
      body
    }
  }
}
`;


export default Blog;
