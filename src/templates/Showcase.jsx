import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const Showcase = ({ pageContext }) => {
  return (
    <Layout>
      <h1>Showcase Template</h1>
      <MDXRenderer>{pageContext.mdx}</MDXRenderer>
    </Layout>
  );
};

export default Showcase;
