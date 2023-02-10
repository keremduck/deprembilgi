/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    env: {
        DOMAIN: 'https://deprembilgi.vercel.app/'
    }
}

module.exports = nextConfig
