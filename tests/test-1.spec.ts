import { test, expect } from '@playwright/test';
import fs from 'node:fs';
import path from 'node:path';

test('test', async ({ page }) => {
  
  console.log('start test ...');

  await page.goto('http://localhost:8080/index.html');
  await page.getByRole('button', { name: 'Say Hello' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  
  console.log('ending test ...');
});


test.afterEach(async ({ page }, testInfo) => {
  console.log("afterEach");

  const coverage = await page.evaluate(() => (window as any).__coverage__ ?? null);

  // no coverage available: exit
  if (!coverage) return;

  const dir = path.join('coverage_tests_result');
  fs.mkdirSync(dir, { recursive: true });
  const fileNameSafe = testInfo.title.replace(/[^a-z0-9-_]+/gi, '_').slice(0, 80);
  
  //write to location: dir + filename
  const file = path.join(dir, `coverage-w${testInfo.workerIndex}-${fileNameSafe}.json`);

  fs.writeFileSync(file, JSON.stringify(coverage), 'utf-8');
});
