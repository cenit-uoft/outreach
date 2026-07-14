import nextraModule from 'nextra';

const nextra = nextraModule.default || nextraModule;

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Turning strict mode off disables strict warning overlays and reveals your menu!
  reactStrictMode: false, 
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'], // Nextra maps out .mdx files automatically
  output: 'export', // Required for your static GitHub Pages deployment
  images: {
    unoptimized: true,
  },
};

export default withNextra(nextConfig);
