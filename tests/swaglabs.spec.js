import { test, expect } from '@playwright/test';

test("Verify login with Valid Credential",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    await expect(page).toHaveURL("https://www.saucedemo.com/v1/inventory.html")

})

test("Verify Valid Username and Valid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("sjfnwlenrwl")

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
})

test("Verify invalid Username and valid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("kajefqeqnil")

    await page.locator("input[type='password']").fill("secret_sauce")

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
})


test("Verify Valid Username and Invalid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("standard_user")

    await page.locator("input[type='password']").fill("sjfnwlenrwl")

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
})

test("Verify Invalid Username and Invalid Password",async({page})=>{

    await page.goto("https://www.saucedemo.com/v1/")

    await page.locator("input[data-test='username']").fill("kajefqeqnil")

    await page.locator("input[type='password']").fill("shbfwkjeb")

    await page.locator("input[type='submit']").click()

    await expect(page.locator("//h3[contains(.,'Epic sadface: Username and password do not match any user in this service')]")).toBeVisible()
})