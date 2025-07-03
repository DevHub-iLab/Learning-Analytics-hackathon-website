/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	trailingSlash: true,
	distDir: "out",
	basePath: "",
	assetPrefix: "",
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	images: {
		unoptimized: true,
	},
	experimental: {
		optimizeCss: false,
	},
}

module.exports = nextConfig
