import { test, expect } from '@playwright/test';

test('Login with valid username and password should redirect to profile page', async ({ page }) => {
    await page.goto('https://demoqa.com/login');
    await page.fill('id=userName', 'atthana');
    await page.fill('id=password', 'Codium123!');
    await page.click('id=login');

    await page.waitForSelector('id=submit')
    const userName = await page.textContent('id=userName-value')
    await expect(userName).toEqual('atthana')

});
