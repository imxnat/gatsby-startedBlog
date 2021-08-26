import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import {
    bodyContainer,
    siteTitle,
    container,
    navPanel,
    heading,
    navLinks,
    navLinkItem,
    navLinkText
  } from './layout.module.css'

const Layout = ({pageTitle, pageHeading, children}) =>{

    //pass your graphQL query
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }      
    `);

    return (
    <div className={bodyContainer}>
        <title>{pageTitle} | {data.site.siteMetadata.title}</title>
        <nav className={navPanel}>
            <div>
            <p className={siteTitle}>{data.site.siteMetadata.title}</p>
            </div>
            <div>
            <ul className={navLinks}>
                <li className={navLinkItem}> 
                    <Link to="/" className={navLinkText}>Home</Link> 
                </li>
                <li className={navLinkItem}> 
                    <Link to="/about" className={navLinkText}>About</Link> 
                </li>
                <li className={navLinkItem}> 
                    <Link to="/blog" className={navLinkText}>Blog</Link> 
                </li>
            </ul>
            </div>
        </nav>
        
        <main className={container}>
            <h1 className={heading}>{pageHeading}</h1>
            {children}
        </main>     

    </div>
    )
}

export default Layout
