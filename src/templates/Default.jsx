import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const DefaultTemplate = ({ pageContext }) => {
  return (
    <>
      <h1>Default Template</h1>
      <MDXRenderer>{pageContext.mdx}</MDXRenderer>
    </>
  );
};

export default DefaultTemplate;
