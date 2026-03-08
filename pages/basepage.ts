import { Page } from '@playwright/test';

export class BasePage {

  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToSauceDemo() {
    await this.page.goto('https://www.saucedemo.com/');
  }

}