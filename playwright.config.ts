import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
    testDir: './tests/e2e',
    timeout: 60 * 1000,
    expect: {
        timeout: 5000,
    },
    use: {
        baseURL: 'http://localhost:1738', // Change this to your Fastify server URL
        // headless: true,
    },
    /* Configure projects for major browsers */
    projects: [
        {
            name: "chromium",
            use: { ...devices["Desktop Chrome"] }
        },

        {
            name: "firefox",
            use: { ...devices["Desktop Firefox"] }
        },

        {
            name: "webkit",
            use: { ...devices["Desktop Safari"] }
        },

        {
            name: "Microsoft Edge",
            use: { ...devices["Desktop Edge"], channel: "msedge" }
        }

        /* Test against mobile viewports. */
        // {
        //   name: 'Mobile Chrome',
        //   use: { ...devices['Pixel 5'] },
        // },
        // {
        //   name: 'Mobile Safari',
        //   use: { ...devices['iPhone 12'] },
        // },

        /* Test against branded browsers. */
        // {
        //   name: 'Microsoft Edge',
        //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
        // },
        // {
        //   name: 'Google Chrome',
        //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
        // },
    ]
});