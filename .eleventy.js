module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("public");
  eleventyConfig.addPassthroughCopy("package.json");
  return {
    dir: {
      input: "src",
      output: "_site",
    },
  };
};
