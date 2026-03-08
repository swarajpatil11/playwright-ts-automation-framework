import { Page, Locator } from '@playwright/test';

export class CartPage {

  readonly page: Page;
  readonly checkoutBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.checkoutBtn = page.locator('#checkout');
  }

  async checkout() {
    await this.checkoutBtn.click();
  }

}