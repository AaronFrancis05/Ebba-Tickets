/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "avatars.githubusercontent.com", // ✅ GitHub avatars
      "lh3.googleusercontent.com", // ✅ Google profile images
    ],
  },
};

export default nextConfig;
