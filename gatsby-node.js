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
          }
        }
      }
    }
  `);

  result.data.allMdx.edges.forEach((edge) => {
    reporter.info(`Creating page from mdx with slug: ${edge.node.slug}`);

    const template = edge.node.slug?.includes("showcase/")
      ? showcaseTemplate
      : defaultTemplate;

    createPage({
      path: `${edge.node.slug}`,
      component: template,
      context: {
        mdx: edge.node.body,
      },
    });
  });
};
