// tests/e2e/docs.spec.ts
const { test, expect } = require("@playwright/test");

test('documentation page has expected content', async ({ page }) => {
  await page.goto('/'); // Navigates to the base URL defined in playwright.config.ts
  const title = await page.title();
  expect(title).toBe('Docs'); // Replace with your expected title
  const content = await page.locator('h1').textContent(); // Adjust selector as needed
  expect(content).toBe('Hello, world'); // Adjust to match your app's content
});