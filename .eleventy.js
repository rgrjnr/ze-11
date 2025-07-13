const { eleventyImageTransformPlugin } = require("@11ty/eleventy-img");
const MarkdownIt = require("markdown-it");

module.exports = async function (eleventyConfig) {
  const { IdAttributePlugin } = await import("@11ty/eleventy");
  const Image = await import("@11ty/eleventy-img");

  eleventyConfig.addPlugin(IdAttributePlugin);

  // Configure the image transform plugin with proper settings
  // eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
  //   // This ensures the plugin looks in the correct output directory
  //   outputDir: "_site/assets/images/processed/",
  //   urlPath: "/assets/images/processed/",
  //   formats: ["webp", "jpeg"],
  //   widths: [300, 600, 900, 1200],
  //   filter: (src) => !src.endsWith(".svg"),
  // });

  // Markdown filter
  const md = new MarkdownIt();
  eleventyConfig.addFilter("markdown", function (content) {
    return md.render(content);
  });

  // Image processing shortcode
  eleventyConfig.addShortcode(
    "image",
    async function (src, alt, sizes = "100vw", classes = "") {
      if (!src) {
        return "";
      }
      if (src.endsWith(".svg")) {
        return `<img src="${
          src.startsWith("/") ? src : "/" + src
        }" alt="${alt}" class="${classes}" loading="lazy" decoding="async" />`;
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

  // SEO data filter for page-specific SEO
  eleventyConfig.addFilter("seoData", function (pageData, globalData) {
    const seoData = {
      title: pageData.title || globalData.title,
      description:
        pageData.excerpt || pageData.description || globalData.description,
      url: globalData.url + (pageData.url || ""),
      author: globalData.author,
      image: pageData.image || globalData.openGraph?.image,
      imageWidth: 1200,
      imageHeight: 630,
      type: pageData.type || "website",
      publishedTime: pageData.date,
      modifiedTime: pageData.lastmod || pageData.date,
    };

    // Clean up undefined values
    Object.keys(seoData).forEach((key) => {
      if (seoData[key] === undefined) {
        delete seoData[key];
      }
    });

    return seoData;
  });

  // Dynamic OG Image shortcode
  eleventyConfig.addShortcode(
    "ogImage",
    function (title, subtitle = "", imagePath = "/assets/images/og.jpg") {
      const encodedTitle = encodeURIComponent(title);
      const encodedSubtitle = encodeURIComponent(subtitle);

      // For now, return the default image path
      // In the future, you could integrate with a service like Cloudinary or similar
      // to generate dynamic OG images
      return imagePath;
    }
  );

  // Sitemap generation
  eleventyConfig.addCollection("sitemap", function (collectionApi) {
    const siteUrl = "https://joseferreira.io";
    const pages = collectionApi.getAll();

    return pages
      .filter((page) => !page.data.draft && page.data.tags !== "hidden")
      .map((page) => ({
        url: siteUrl + page.url,
        lastmod: page.date ? page.date.toISOString() : new Date().toISOString(),
        changefreq: page.data.changefreq || "monthly",
        priority: page.data.priority || 0.5,
      }));
  });

  // Copy assets with cache headers
  eleventyConfig.addPassthroughCopy({
    "src/assets": "assets",
  });

  // Add cache headers for static assets
  eleventyConfig.addGlobalData("cacheHeaders", {
    css: "public, max-age=31536000, immutable",
    js: "public, max-age=31536000, immutable",
    images: "public, max-age=31536000, immutable",
    fonts: "public, max-age=31536000, immutable",
  });

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
