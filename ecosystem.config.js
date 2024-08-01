module.exports = {
	apps: [
		{
			name: "app",
			script: "dist/index.js",
			instances: 1,
			log_date_format: "DD-MM-YYYY HH:mm:ss",
			time: true,
		},
	],
};
