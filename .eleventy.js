module.exports = async function (eleventyConfig) {
  const { IdAttributePlugin } = await import("@11ty/eleventy");

  eleventyConfig.addPlugin(IdAttributePlugin);

  // Copy assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Watch targets
  eleventyConfig.addWatchTarget("./src/styles/");
  eleventyConfig.addWatchTarget("./src/ts/");
  eleventyConfig.addWatchTarget("./tailwind.config.js");
  eleventyConfig.addWatchTarget("./postcss.config.js");

  // Set custom directories
  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_layouts",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
