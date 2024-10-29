## Part 1: Debugging
- Determine the issues with the test package to see why tests don't run

## Part 2: Testing
Write a test that satisfies the following workflow:
   1. Navigate to https://sandbox.applitools.com/e-commerce
   2. Open the page for "Small Succulent Planter Pot"
   3. Choose "gold" for "Select Color" Dropdown
   4. Increment count to 3. 
   5. Click "Add to cart"
   6. Navigate to cart (cart icon in the top right corner)
   7. Click "Checkout"
   8. Write an assertion to ensure that there are 3 "Small Succulent Planter Pots" in your cart. 