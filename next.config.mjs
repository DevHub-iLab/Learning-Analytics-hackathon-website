/** @type {import('next').NextConfig} */
const nextConfig = {
	poweredByHeader: false,
	cleanDistDir: true,
	transpilePackages: ["@example/shared"],
	output: "standalone",
	trailingSlash: true,
}

export default nextConfig
