const nextConfig = {
	poweredByHeader: false,
	cleanDistDir: true,
	transpilePackages: ["@example/shared"],
	output: "standalone",
	// outputFileTracingRoot: "../sst",
	eslint: {
		ignoreDuringBuilds: true,
	},
	trailingSlash: true,
	skipTrailingSlashRedirect: true,
}

export default nextConfig
