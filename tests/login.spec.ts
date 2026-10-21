import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  await page.goto('https://10.137.16.128:9643/login');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('kattikap');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('mYD0n3tE9w@rkV#26');
  await page.getByRole('button', { name: 'LOG IN' }).click();
});