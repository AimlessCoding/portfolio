const path = require(`path`);

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const defaultTemplate = path.resolve("src/templates/Default.jsx");
  const showcaseTemplate = path.resolve("src/templates/Showcase.jsx");
  const result = await graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            slug
            body
            frontmatter {
              title
              featuredImage
            }
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach((edge) => {
    const template = edge.node.slug?.includes("showcase/")
      ? showcaseTemplate
      : defaultTemplate;
    const path = edge.node.slug?.length > 0 ? edge.node.slug : "index";

    reporter.info(`Creating page from mdx: ${path}`);

    createPage({
      path: path,
      component: template,
      context: {
        mdx: edge.node.body,
        frontmatter: edge.node.frontmatter,
      },
    });
  });
};
