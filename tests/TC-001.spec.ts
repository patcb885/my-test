import { test, expect } from '@playwright/test';

test.describe('Practice Software Testing - Search Feature', () => {

  // TC_SR_001: ค้นหาสินค้าด้วยชื่อที่มีอยู่จริง
  test('TC_SR_001: Should search for an existing product (Hammer)', async ({ page }) => {
    // 1. เปิดเว็บไซต์
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. กรอกคำว่า "Hammer" ลงในช่องค้นหา
    await page.fill('[data-test="search-query"]', 'Hammer');
    
    // 3. คลิกปุ่ม Search
    await page.click('[data-test="search-submit"]');

    // 4. ตรวจสอบว่าแสดงผลลัพธ์สินค้าที่เกี่ยวข้อง
    const productCards = page.locator('.card');
    await expect(productCards.first()).toBeVisible();

    // ตรวจสอบว่าสินค้าตัวแรกมีคำว่า "Hammer" อยู่ในชื่อ
    const firstProductTitle = page.locator('[data-test="product-name"]').first();
    await expect(firstProductTitle).toContainText(/Hammer/i);
  });

// TC_SR_002: ค้นหาสินค้าด้วยชื่อที่ไม่มีในระบบ
  test('TC_SR_002: Should show no results for non-existent product (Asdfghjk)', async ({ page }) => {
    // 1. เปิดเว็บไซต์
    await page.goto('https://practicesoftwaretesting.com/');

    // 2. กรอกคำว่า "Asdfghjk" ลงในช่องค้นหา
    await page.fill('[data-test="search-query"]', 'Asdfghjk');
    
    // 3. คลิกปุ่ม Search
    await page.click('[data-test="search-submit"]');

    // 4. วิธีใหม่: ตรวจสอบว่าสินค้าที่แสดงจะต้องไม่มีตัวไหนที่ชื่อมีคำว่า "Asdfghjk"
    // เราจะดึงรายการสินค้าทั้งหมด และใช้ regular expression ตรวจจับ
    const productTitle = page.locator('[data-test="product-name"]');
    // ตรวจสอบว่าไม่มี element ไหนที่มี text ตรงกับ 'Asdfghjk'
    await expect(productTitle.filter({ hasText: 'Asdfghjk' })).toHaveCount(0);
  });

});