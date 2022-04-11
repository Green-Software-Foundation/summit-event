import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import "../styles/globals.css"
import Header from "./header"
import footerLogo from "../assets/footer-logo.svg"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="bg-primary-darkest">
      <div className="max-w-5xl mx-auto px-4 xl:px-0">
        <Header siteTitle={data.site.siteMetadata.title} />

        <main>{children}</main>
        <footer>
          <div className="mt-28 pb-16 text-center items-center justify-center">
            <hr className="border-primary-dark w-7/12 m-auto" />
            <img className="mx-auto mt-16" src={footerLogo} alt="Footer Logo" />
            <p className="mt-4 text-primary-light">
              Privacy Policy | Code of Conduct
            </p>
            <p className="text-primary-light mt-2 text-sm">
              Copyright © {new Date().getFullYear()} Joint Development
              Foundation Projects, LLC, <br /> Green Software Foundation Series
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
