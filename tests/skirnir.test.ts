import { expect, test } from '@playwright/test';

test('homepage has Playwright in title and get started link linking to the intro page', async ({ page }) => {
  await page.goto('/');

  await expect(page).toHaveTitle(/Skirnir Inc\./);
  await expect(page.locator('h1')).toContainText(/E-Commerce Specialist/);

  // Click text=About
  await page.locator('text=About').click();
  await expect(page).toHaveURL('/#/about');
  await expect(page.locator('p >> nth=1')).toContainText('〒530-0001 大阪市北区梅田1-1-3 29F 1-1-1');
  await expect(page.locator('p >> nth=3')).toContainText('ohkouchi@skirnir.co.jp');

  // Click text=Services
  await page.locator('text=Services').click();
  await expect(page).toHaveURL('/#/services');
  await expect(page.locator('p >> nth=0')).toContainText(/ネットショップ/);
  // Click text=Contact
  await page.locator('text=Contact').click();
  await expect(page).toHaveURL('/#/contact');
    await expect(page.locator('p >> nth=0')).toContainText(/ご連絡/);
  // Click text=Tradelaw
  await page.locator('text=Tradelaw').click();
  await expect(page).toHaveURL('/#/tradelaw');
  await expect(page.locator('h1')).toContainText(/特定商取引に基づく表記/);
});
