import { expect, test } from '@playwright/test';

// Part 1
// Write a test that satisfies the following workflow:
// 1. Navigate to await page.goto('https://the-internet.herokuapp.com/hovers');
// 2. Hover over the first image
// 3. Write an assertion to ensure that the text "name: user1" is visible
test('the internet hovers', async ({ page }) => {

});


// Part 2
// Adding and removing elements
// 1. Navigate to await page.goto('https://the-internet.herokuapp.com/add_remove_elements/');
// 2. Click the "Add Element" Button 3 times 
// 3. Delete the 2nd button
test('adding and deleting elements', async ({ page }) => {
    
});

// Part 3
// Write a test that satisfies the following workflow:
//    1. Navigate to https://sandbox.applitools.com/e-commerce
//    2. Open the page for "Small Succulent Planter Pot"
//    3. Choose "gold" for "Select Color" Dropdown
//    4. Increment count to 3.
//    5. Click "Add to cart"
//    6. Navigate to cart (cart icon in the top right corner)
//    7. Click "Checkout"
//    8. Write an assertion to ensure that the total price of the cart is $9.69.
test('interview test', async ({ page }) => {

});