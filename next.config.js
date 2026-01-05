module.exports = {
  reactStrictMode: true,

  // Required for GitHub Pages static export
  output: "export",
  trailingSlash: true,

  images: {
    loader: "custom",
  },

  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
