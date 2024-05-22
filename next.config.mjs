/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "https",
                hostname: 'res.cloudinary.com',
            },
            {
                hostname: "https",
                hostname: 'ik.imagekit.io',
            }
        ]
    }
};

export default nextConfig;
