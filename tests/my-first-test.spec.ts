import { test, expect } from '@playwright/test';

test.use({
  ignoreHTTPSErrors: true
});

test('test', async ({ page }) => {
  await page.goto('https://10.137.16.128:9643/login');
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).click();
  await page.getByRole('textbox', { name: 'ชื่อผู้ใช้งาน' }).fill('kattikap');
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).click();
  await page.getByRole('textbox', { name: 'รหัสผ่าน' }).fill('mYD0n3tE9w@rkV#26');
  await page.getByRole('button', { name: 'LOG IN' }).click();
  await page.locator('#btn-toggle-side-menu').click();
  await page.getByText('Sub Contract').click();
  await page.getByText('Sub Project Management').click();
  await page.getByLabel('Region').selectOption('1: 1');
  await page.getByLabel('System').selectOption('8: 08');
  await page.getByRole('textbox', { name: 'Sub Project Name' }).click();
  await page.getByRole('textbox', { name: 'Sub Project Name' }).fill('2026 Capacity & CE-Radio-BKK-TEST (Phase 2)');
  await page.getByRole('button', { name: 'SEARCH' }).click();
});