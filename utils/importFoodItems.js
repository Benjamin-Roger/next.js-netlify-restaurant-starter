const importFoodItems = async () => {
  const markdownFiles = require
    .context("@/content/foodItems", false, /\.md$/)
    .keys()
    .map((relativePath) => relativePath.substring(2));

  const allFoodItems = await Promise.all(
    markdownFiles.map(async (path) => {
      const markdown = await import(`@/content/foodItems/${path}`);
      return {
        ...markdown
      };
    })
  );

  return allFoodItems;
};

export default importFoodItems;
