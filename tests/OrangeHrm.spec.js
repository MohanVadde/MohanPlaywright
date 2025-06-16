import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill('MMM');
  await page.getByRole('textbox', { name: 'Middle Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).click();
  await page.getByRole('textbox', { name: 'Last Name' }).fill('jjj');
  await page.getByRole('button', { name: 'Save' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewPersonalDetails/empNumber/204');
  await page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).getByRole('button').click();
  await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
  await page.getByRole('listitem').filter({ hasText: 'Employee List' }).click();
  await page.getByRole('link', { name: 'Dashboard' }).click();
  await expect(page.locator('#app')).toMatchAriaSnapshot(`
    - img "profile picture"
    - paragraph: Punched Out
    - paragraph: "/Punched Out: Mar 29th at \\\\d+:\\\\d+ PM \\\\(GMT 7\\\\)/"
    - text: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+ Today/
    - button ""
    - separator
    - paragraph: This Week
    - paragraph: /Jun \\d+ - Jun \\d+/
    - text: 
    - paragraph: /\\d+[hmsp]+ [\\d,.]+[bkmBKM]+/
    `);
  await page.getByText('Buzz Latest PostsLaney').click();
  await expect(page.locator('div').filter({ hasText: /^Buzz$/ })).toBeVisible();
  await page.getByText('Buzz Upgrademanda user').click();
  await page.getByRole('button', { name: 'Upgrade' }).click();
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
});