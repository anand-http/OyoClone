/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ["image/avif", "image/webp"],
        domains: ["static.toiimg.com", "images.oyoroomscdn.com"]
    },
    env: {
        NEXT_PUBLIC_KEY_ID: process.env.NEXT_PUBLIC_KEY_ID,
        KEY_ID: process.env.KEY_ID,
        KEY_SECRET: process.env.KEY_SECRET,
        MONGO_URI: process.env.MONGO_URI
    },

};

export default nextConfig;
