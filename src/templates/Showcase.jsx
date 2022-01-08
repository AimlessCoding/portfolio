import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Showcase = ({ pageContext }) => {
  return (
    <>
      <h1>Showcase Template</h1>
      <MDXRenderer>{pageContext.mdx}</MDXRenderer>
    </>
  );
};

export default Showcase;
