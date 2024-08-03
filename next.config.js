/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',  // This will generate a static site
    images: {
        unoptimized: true,
    }
}

module.exports = nextConfig
