import { Page, expect } from '@playwright/test';

export class Helpers {
  static async navigate(page: Page, url: string) {
    await page.goto(url);
  }

  static async verifyTitle(page: Page, titlePattern: RegExp) {
    await expect(page).toHaveTitle(titlePattern);
  }

  static async takeScreenshotOnDemand(page: Page, fileName: string) {
    await page.screenshot({ path: `test-results/${fileName}`, fullPage: true });
  }

  static generateTimestamp(): string {
    return new Date().toISOString().replace(/[:.]/g, '-');
  }
}