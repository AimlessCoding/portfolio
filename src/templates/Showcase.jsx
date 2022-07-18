import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";

const Showcase = ({ pageContext }) => {
  const { featuredImage } = pageContext.frontmatter;

  console.log(featuredImage);
  return (
    <Layout>
      {featuredImage && <StaticImage alt="featured" src={featuredImage} />}
      <MDXRenderer>{pageContext.mdx}</MDXRenderer>
    </Layout>
  );
};

export default Showcase;
