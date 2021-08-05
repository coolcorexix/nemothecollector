import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
    await page.goto('http://localhost:3000', {
        timeout: 60000,
    });
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve(null);
        }, 1000);
    })
    expect(await page.screenshot({
        fullPage: true,
    })).toMatchSnapshot('sth-to-show.png');
});