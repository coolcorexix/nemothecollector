import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000');
    await page.screenshot({
        fullPage: true,
        path: 'sth-to-show.jpg',
    })
});