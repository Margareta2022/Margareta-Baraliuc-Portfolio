import { test } from '@playwright/test';
import { HomePage } from '../pages/home-page';
import { Helpers } from '../utils/helpers';

test.describe('Smoke - Homepage', () => {
  test('should load the homepage successfully', async ({ page }) => {
    const homePage = new HomePage(page);

    await homePage.goto();
    await homePage.verifyHomePageLoaded();

    await Helpers.takeScreenshotOnDemand(
      page,
      `homepage-${Helpers.generateTimestamp()}.png`
    );
  });
});