import { expect, test } from '@playwright/test';

// Part 1
// Write a test that satisfies the following workflow:
//    1. Navigate to https://sandbox.applitools.com/e-commerce
//    2. Open the page for "Small Succulent Planter Pot"
//    3. Choose "gold" for "Select Color" Dropdown
//    4. Increment count to 3. 
//    5. Click "Add to cart"
//    6. Navigate to cart (cart icon in the top right corner)
//    7. Click "Checkout"
//    8. Write an assertion to ensure that the total price of the cart is $9.69. 

test('interview test', async ({ page }) => {
    await page.goto('https://sandbox.applitools.com/e-commerce');
    await page.getByLabel('View Small Succulent Planter').click();
    await page.getByLabel('Variants').selectOption('gold');
    await page.getByLabel('Quantity').click();
    await page.getByLabel('Quantity').fill('3');
    await page.getByRole('button', { name: 'Add to cart' }).click();
    await page.getByLabel('Shopping Cart with 3 items').click();


  const element = page.locator('#__next > div.cart_wrap__Osl_G > table > tbody > tr.cart_grandTotal__UOM3h > td.cart_totals__j6eK1');

  // Retrieve the text content of the element and ensure it is "$9.69"
  const textContent = await element.textContent();
  expect(textContent.trim()).toBe('$9.69');

});

// Part 2
// Write a test that satisfies the following workflow:
// 1. Navigate to https://the-internet.herokuapp.com/hovers
// 2. Hover over the first image
// 3. Write an assertion to ensure that the text "name: user1" is visible
test('the internet hovers', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/hovers');
  await page.locator('#content > div > div:nth-child(3) > img').hover();

  // Verify an effect of the hover action, such as a tooltip appearing
  const tooltip = page.locator('#content > div > div:nth-child(3) > div > h5');
  await expect(tooltip).toBeVisible();
});