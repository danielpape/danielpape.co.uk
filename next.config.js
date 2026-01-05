/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  // helps GitHub Pages generate /blog/my-post/ as folder URLs
  trailingSlash: true,

  images: {
    loader: "custom",
    unoptimized: true, // recommended for static export (avoids image optimizer)
  },
};
