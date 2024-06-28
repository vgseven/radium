/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "odouepjkxheu5esn.public.blob.vercel-storage.com",
				port: "",
				pathname: "/silvercompany/**",
			},
		],
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
};

export default nextConfig;

// https://odouepjkxheu5esn.public.blob.vercel-storage.com/silvercompany/make-happen.jpg
