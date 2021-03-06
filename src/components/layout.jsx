/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";

import { StaticQuery, graphql } from "gatsby";

// Components & Styles
import Header from "./header";
import Navigation from "./navigation-controller";
import "../styles/layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    // eslint-disable-next-line no-unused-vars
    render={data => (
      <>
        <Navigation />
        <Header />
        <main>{children}</main>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
