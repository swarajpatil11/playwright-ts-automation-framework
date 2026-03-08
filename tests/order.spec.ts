import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';
import { loginData } from '../test-data/loginData';

test.beforeEach(async ({ page }) => {

  const login = new LoginPage(page);

  await login.navigateToSauceDemo();
  await login.login(loginData.username, loginData.password);

});

test('complete order flow', async ({ page }) => {

  const product = new ProductsPage(page);
  const cart = new CartPage(page);
  const checkout = new CheckoutPage(page);

  await product.addProductToCart();
  await product.goToCart();

  await cart.checkout();

  await checkout.fillInformation('John', 'Doe', '411001');
  await checkout.finishOrder();

  await expect(page.locator('.complete-header'))
    .toHaveText('Thank you for your order!');

});