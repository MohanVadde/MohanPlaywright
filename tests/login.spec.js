import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"
import { log } from 'console';

test('Verify login with Valid Credential', async ({ page }) => {

    // Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill(logindata.username);

    await page.locator("input[type='password']").fill(logindata.password);

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
})

test('Verify login with Valid Username and Invalid Password', async ({ page }) => {

    // Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("Admin");

    await page.locator("input[type='password']").fill("abcdefgh");

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
})

test('Verify login with Invalid Username and Valid Password', async ({ page }) => {

    // Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page.locator("input[name='username']").fill("admmmnn");

    await page.locator("input[type='password']").fill("admin123");

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
})

test('Verify login with Invalid Username and Invalid Password', async ({ page }) => {

    // Actions
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")

    await page. locator("input[name='username']").fill("adddmanfn");

    await page.locator("input[type='password']").fill("admdfsfsin123");

    await page.locator("button[type='submit']").click()

    // Assertions
    await expect(page.locator("//p[text()='Invalid credentials']")).toBeVisible();
})