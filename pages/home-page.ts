import { Page, Locator, expect } from '@playwright/test';
import { testData } from '../utils/test-data';
import { Helpers } from '../utils/helpers';

export class HomePage {
  readonly page: Page;
  readonly getStartedLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.getStartedLink = page.getByRole('link', { name: /get started/i });
  }

  async goto() {
    await Helpers.navigate(this.page, testData.urls.playwrightHome);
  }

  async verifyHomePageLoaded() {
    await Helpers.verifyTitle(this.page, /Playwright/i);
    await expect(this.getStartedLink).toBeVisible();
  }
}