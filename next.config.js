const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  ...nextConfig,
  async headers() {
    return [
      {
        source: '/app.webmanifest',
        headers: [
          {
            key: 'Content-Type',
            value: 'application/manifest+json',
          },
        ],
      },
      // ...
    ];
  },
  // ...
};
