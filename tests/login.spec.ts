import {test , expect} from '@playwright/test'
import { LoginPage } from '../pages/loginpage'
import { loginData } from '../test-data/loginData';

test.beforeEach( async ({page})=>{

const lp = new LoginPage(page);
await lp.navigateToSauceDemo();
await lp.login(loginData.username, loginData.password)

})

test('login assertion', async ({page})=>{

    await expect(page).toHaveTitle('Swag Labs')




})