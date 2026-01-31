module.exports = {
  apps: [
    {
      name: "teamcivitas",
      script: "build/index.js",
      env: {
        PORT: 4000,
        HOST: "0.0.0.0",
        NODE_ENV: "production",
        ORIGIN: "https://teamcivitas.net" // Recommended for SvelteKit
      }
    }
  ]
}