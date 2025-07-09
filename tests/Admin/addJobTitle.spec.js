import { test, expect } from '@playwright/test';

import logindata from "../../testData/login.json"

test('Verify login and add job title', async ({ page }) => {
    test.setTimeout(60000);
    await page.goto('https://opensource-demo.orangehrmlive.com/');
    
    await page.locator("input[name='username']").fill(logindata.username);
    await page.locator("input[type='password']").fill(logindata.password);
    await page.locator("button[type='submit']").click();
 
    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

    await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click()
    await page.locator("//span[normalize-space(text())='Job']").click()
    await page.locator("//a[normalize-space(text())='Job Titles']").click()


    await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList")

    await page.locator("button.oxd-button.oxd-button--medium.oxd-button--secondary").click()
    await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("SDET Developer");
    await page.locator("textarea[placeholder='Type description here']").fill("I am QA Engineer");
    
    await page.locator("//textarea[@placeholder='Add note']").fill("I am note");

    await page.locator("//div[@class='oxd-form-actions']//button[1]").click()

    await page.locator("(//button[@type='button']//i)[3]").click();

    await page.locator("//button[@type='submit']").click();


})





// import { test, expect } from '@playwright/test';
// import logindata from "../testData/login.json";
// // import pdfdata from "../testData/dummy.pdf";

// test('Verify login and add job title', async ({ page }) => {
//     test.setTimeout(60000);
//     // 1. Go to login page
//     await page.goto('https://opensource-demo.orangehrmlive.com/');
//     await page.locator("input[name='username']").fill(logindata.username);
//     await page.locator("input[type='password']").fill(logindata.password);
//     await page.locator("button[type='submit']").click();

//     // 2. Verify successful login
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");

//     // 3. Navigate to Job Titles
//     await page.locator('a[href="/web/index.php/admin/viewAdminModule"]').click();
//     await page.locator("(//nav[@class='oxd-topbar-body-nav']//li)[2]").click();
//     await page.locator("//a[text()='Job Titles']").click();

//     // 4. Verify we are on Job Titles page
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");

//     // 5. Click Add Job Title
//     await page.locator("button:has-text('Add')").click();

//     // 6. Fill Job Title form
//     await page.locator("(//input[@class='oxd-input oxd-input--active'])[2]").fill("QA Automation Lead");

//     await page.locator("textarea[placeholder='Type description here']").fill("This is a test job title");

//     // Optional: Upload a file (can skip if not needed)
//     // await page.setInputFiles('input[type="file"]', `${pdfdata}`);

//     await page.locator("textarea[placeholder='Add note']").fill("This is a note");

//     // 7. Click Cancel button
//     await page.locator("button:has-text('Cancel')").click();

//     // 8. Verify we're back on Job Titles list
//     await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewJobTitleList");

//     // 9. Optionally, test delete flow (Only if job title got saved)
//     // await page.locator("i.oxd-icon.bi-trash").first().click();
//     // await page.locator("button:has-text('Yes, Delete')").click();
// });
