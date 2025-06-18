import { test, expect } from '@playwright/test';

import logindata from '../../testData/login.json';
import { title } from 'process';

const jobtitles = {
    jobtitle1: "CEO",
    jobtitle2: "CFO",
    jobtitle3: "COO",
}

for (let title in jobtitles) {

    test(`test ${jobtitles[title]}`, async ({ page }) => {
        await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        await page.getByRole('textbox', { name: 'Username' }).click();
        await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
        await page.getByRole('textbox', { name: 'Password' }).click();
        await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
        await page.getByRole('button', { name: 'Login' }).click();
        await page.getByRole('link', { name: 'Admin' }).click();
        await page.getByText('Job').click();
        await page.getByRole('listitem').filter({ hasText: /^Job Titles$/ }).click();
        await page.getByRole('button', { name: ' Add' }).click();
        await page.getByRole('textbox').nth(1).click();
        await page.getByRole('textbox').nth(1).fill('Sales Person');
        await page.getByRole('button', { name: 'Save' }).click();
    })

}