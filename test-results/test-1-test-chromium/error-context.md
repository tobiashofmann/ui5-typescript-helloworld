# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: test-1.spec.ts >> test
- Location: tests\test-1.spec.ts:3:1

# Error details

```
Error: expect(page).toHaveScreenshot(expected) failed

  3078 pixels (ratio 0.01 of all image pixels) are different.

Call log:
  - Expect "toHaveScreenshot" with timeout 5000ms
    - verifying given screenshot expectation
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 2759 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 100ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - 319 pixels (ratio 0.01 of all image pixels) are different.
  - waiting 250ms before taking screenshot
  - taking page screenshot
    - disabled all CSS animations
  - waiting for fonts to load...
  - fonts loaded
  - captured a stable screenshot
  - 3078 pixels (ratio 0.01 of all image pixels) are different.

```

# Page snapshot

```yaml
- generic [ref=e1]:
  - generic:
    - img [ref=e2]
    - img [ref=e22]
    - alertdialog "Say Hello World App!" [ref=e23]:
      - banner:
        - generic [ref=e26]:
          - heading [level=1]
      - generic [ref=e30]: Say Hello World App!
      - contentinfo [ref=e31]:
        - button "OK" [active] [ref=e34] [cursor=pointer]:
          - generic [ref=e36]: OK
  - generic [ref=e44]:
    - banner [ref=e45]:
      - heading "Hello World" [level=2] [ref=e48]
    - figure [ref=e50]:
      - generic [ref=e51]:
        - img "Hello World App" [ref=e52]
        - generic [ref=e54]:
          - heading "Hello World App" [level=2] [ref=e55]
          - generic [ref=e56]: This is a UI5 TypeScript Hello World app
      - button "Say Hello World" [ref=e58] [cursor=pointer]:
        - generic [ref=e60]: Say Hello World
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test';
  2  | 
  3  | test('test', async ({ page }) => {
  4  |   await page.goto('http://localhost:8080/index.html');
  5  | 
  6  |   await page.screenshot({ path: 'homepage.png' });
  7  | 
  8  | 
  9  |   await page.getByRole('button', { name: 'Say Hello' }).click();
> 10 |   await expect(page).toHaveScreenshot();
     |                      ^ Error: expect(page).toHaveScreenshot(expected) failed
  11 |   await page.screenshot({ path: 'dialog_open.png' });
  12 | 
  13 | 
  14 |   await page.getByRole('button', { name: 'OK' }).click();
  15 |   await expect(page).toHaveScreenshot();
  16 |   await page.screenshot({ path: 'dialog_closed.png' });
  17 | });
```