const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");

module.exports = async function (eleventyConfig) {
  const { IdAttributePlugin } = await import("@11ty/eleventy");
  const Image = await import("@11ty/eleventy-img");

  eleventyConfig.addPlugin(IdAttributePlugin);
  eleventyConfig.addPlugin(eleventyImageTransformPlugin);

  // Image processing shortcode
  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, sizes = "100vw", classes = "") {
      if (!src) {
        return "";
      }

      let metadata = await Image.default(src, {
        widths: [300, 600, 900, 1200],
        formats: ["webp", "jpeg"],
        outputDir: "_site/assets/images/processed/",
        urlPath: "/assets/images/processed/",
      });

      let imageAttributes = {
        alt,
        sizes,
        loading: "lazy",
        decoding: "async",
        class: classes,
      };

      return Image.default.generateHTML(metadata, imageAttributes);
    }
  );

  // Image size filter for getting dimensions
  eleventyConfig.addFilter("imageSize", async function (imagePath) {
    if (!imagePath) {
      return null;
    }

    try {
      const metadata = await Image.default(imagePath, {
        widths: [1], // Just get the original size
        formats: ["jpeg"], // Any format will work for size detection
        outputDir: "_site/assets/images/processed/",
        urlPath: "/assets/images/processed/",
      });

      const firstFormat = Object.keys(metadata)[0];
      const firstWidth = Object.keys(metadata[firstFormat])[0];

      return {
        width: metadata[firstFormat][firstWidth][0].width,
        height: metadata[firstFormat][firstWidth][0].height,
      };
    } catch (error) {
      console.error(`Error getting image size for ${imagePath}:`, error);
      return null;
    }
  });

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
