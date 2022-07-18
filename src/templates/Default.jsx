import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";

const DefaultTemplate = ({ pageContext }) => {
  return (
    <Layout>
      <MDXRenderer>{pageContext.mdx}</MDXRenderer>
    </Layout>
  );
};

export default DefaultTemplate;
