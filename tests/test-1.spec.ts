import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:8080/index.html');

  await page.getByRole('button', { name: 'Say Hello' }).click();
  await expect(page).toHaveScreenshot();
  await page.screenshot({ path: 'dialog_open.png' });

  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page).toHaveScreenshot();
  await page.screenshot({ path: 'dialog_closed.png' });
});