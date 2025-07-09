import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();

  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();

  await page.getByRole('menuitem', { name: 'Pay Grades' }).click();

  await page.getByRole('button', { name: ' Add' }).click();

  await page.locator('form').getByRole('textbox').click();
  await page.locator('form').getByRole('textbox').fill('Mohan');
  await page.getByRole('button', { name: 'Save' }).click();

  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByText('-- Select --').click();
  await page.getByText('INR - Indian Rupee').click();
  await page.getByRole('textbox').nth(2).fill('250000');
  await page.getByRole('textbox').nth(3).fill('300000');
  await page.getByRole('button', { name: 'Save' }).nth(1).click();

  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('button', { name: 'Cancel' }).nth(1).click();

  await page.getByRole('heading', { name: 'Edit Pay Grade' }).click();
  await page.getByRole('heading', { name: 'Currencies' }).click();
  await page.getByText('Job').click();
  await page.getByText('Job Job TitlesPay').click();
  await page.getByRole('heading', { name: 'Add Pay Grade' }).click();
  await page.getByText('* Required').click();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewPayGrades');
  await page.getByRole('heading', { name: 'Pay Grades' }).click();
  await page.getByText('(8) Records Found').click();

  await page.getByRole('row', { name: ' "£$%^&*  ' }).getByRole('button').first().click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();

  await page.getByRole('row', { name: ' Mohan Indian Rupee  ' }).getByRole('button').nth(1).click();
  await page.getByRole('button', { name: 'Cancel' }).click();

  await page.getByRole('row', { name: ' Grade 1 United States' }).locator('span i').click();
  await page.getByRole('row', { name: ' Grade 2 United States' }).locator('span i').click();
  await page.getByRole('row', { name: ' Grade 3 United States' }).locator('span i').click();
  await page.getByRole('row', { name: ' Grade 4 United States' }).locator('span i').click();
  await page.getByRole('row', { name: ' Grade 5 United States' }).locator('span i').click();

  await page.getByText('(5) Records Selected').click();
  await page.getByRole('row', { name: ' 3453535  ' }).getByRole('cell').first().click();

  await page.getByRole('button', { name: ' Delete Selected' }).click();
  await page.getByRole('button', { name: 'No, Cancel' }).click();
  await page.getByRole('button', { name: ' Delete Selected' }).click();
  await page.getByRole('button', { name: ' Yes, Delete' }).click();

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
});