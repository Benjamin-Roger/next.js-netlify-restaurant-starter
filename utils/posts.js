import config from "config";

const importAllPosts = async () => {
  const markdownFiles = require
    .context("@/content/blogPosts", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const allPosts = await Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`@/content/blogPosts/${path}`);

      var excerpt =
        markdown.html.length > 120
          ? markdown.html.substring(0, 120) + "..."
          : markdown.html;

      return {
        ...markdown,
        slug: path.substring(0, path.length - 3),
        excerpt,
      };
    })
  );

  await allPosts.sort((a, b) => {
    return new Date(b.attributes.date) - new Date(a.attributes.date);
  });

  return allPosts;
};

const importBlogPosts = async (min, number) => {
  const allPosts = await importAllPosts();

  return allPosts.slice(min || 0, number || config.postsPerPage);
};

const countPosts = async () => {
  const allPosts = await importAllPosts();

  return allPosts.length;
};

export { importBlogPosts, countPosts };
