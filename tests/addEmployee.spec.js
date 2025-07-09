import { test, expect } from '@playwright/test';

import logindata from "../testData/login.json"
import data from "../testData/addEmployee.json"
import { log } from 'console';

const jobtitles = {
    jobtitle1: "CEO",
    jobtitle2: "CFO",
    jobtitle3: "COO",
} 

test('test', async ({ page }) => {
  await page.goto('/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill(logindata.username);
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(logindata.password);
  await page.getByRole('button',{name: 'Login'}).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Add Employee' }).click();
  await page.getByRole('textbox', { name: 'First Name' }).fill(data.firstname);
  await page.getByRole('textbox', { name: 'Last Name' }).fill(data.lastname);
  await page.getByRole('button', { name: 'Save' }).click();
//   await page.locator('form').filter({ hasText: 'Employee Full NameEmployee' }).getByRole('button').click();
//   await page.locator('form').filter({ hasText: 'Blood Type-- Select --' }).getByRole('button').click();
//   await page.getByRole('link', { name: 'Employee List' }).click();
});