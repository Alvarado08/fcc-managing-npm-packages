module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("package.json");
  eleventyConfig.addPassthroughCopy({
    "src/_api/package.json": "_api/package.json",
  });
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
