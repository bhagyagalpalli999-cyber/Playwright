

import { test, expect, Locator } from "@playwright/test";

test("dynamic dropdown", async ({ page }) => {
    await page.goto("https://www.flipkart.com/");
    await page.waitForLoadState("networkidle");

    const searchInput: Locator = page.getByPlaceholder("Search for Products, Brands and More").first();
    await searchInput.fill("shoes");
   

    await page.waitForTimeout(3000);
    
});