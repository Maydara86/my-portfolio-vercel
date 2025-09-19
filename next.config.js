/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['images.unsplash.com'],
    formats: ['image/webp', 'image/avif'],
  },
  experimental: {
    // optimizeCss depends on the `critters` package being available at
    // build time. Some environments (like Vercel's locked install policy)
    // may not run build scripts for certain transitive deps, causing a
    // missing module error. Disable this experiment to avoid the
    // 'Cannot find module "critters"' error during prerendering.
    // If you prefer the optimization, install `critters` explicitly
    // (npm/pnpm/yarn add --save critters) or enable build scripts with
    // `pnpm approve-builds` in the deployment environment.
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig