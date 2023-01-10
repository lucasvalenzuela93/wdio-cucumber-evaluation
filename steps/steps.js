const { Given, When, Then } = require('@wdio/cucumber-framework');

const MainPage = require('../pageobjects/main.page');
const ProductDetailsPage = require('../pageobjects/product.details.page')
const CartPage = require('../pageobjects/cart.page')

const testData = {
    newUsername: "lucasvalenzuela".concat(Math.floor(Math.random() * 10000)),
    password: "pass1234"
};
const username = testData.newUsername;
let productName = '';

Given(/^User lands on main page$/, async () => {
    await browser.url(`https://www.demoblaze.com/index.html`)
    await MainPage.awaitNavigationBarIsDisplayed();
});

When(/^the user completes the register form$/, async () => {
    await MainPage.clickOnSignUp();
    await MainPage.completeSignupForm(testData.newUsername, testData.password);
});

Then(/^the message 'Sign up successful.' is shown$/, async () => {
    const alertText = await browser.getAlertText();
    expect(alertText).toHaveText('Sign up successful.')
    await browser.acceptAlert();
});

When(/^user login$/, async () => {
    await MainPage.login(username, testData.password);
});

Then(/^user (can|cannot) see his username on nav bar$/, async (capacity) => {
    const capacityList = {
        can: () => expect(MainPage.nameOfUser).toHaveText('Welcome '+ username),
        cannot: () => !expect(MainPage.nameOfUser).toBeDisplayed()
    };
    await capacityList[capacity]();
});

Then(/^user logout$/, async () => {
    await MainPage.logout();
});

When(/^the user goes to laptop list$/, async () => {
    await MainPage.goToLaptopsList();
    await MainPage.waitLaptopCardsAreDisplayed();
})

When(/^add a laptop to cart$/, async () => {
    await MainPage.goToDetailsFirstLaptop();
    await ProductDetailsPage.elementName.waitForDisplayed();
    productName = await ProductDetailsPage.elementName.getText();
    await ProductDetailsPage.addElementToCart();
    if(await browser.isAlertOpen()) { await browser.acceptAlert()}
})

Then(/^the laptop is added to the cart$/, async () => {
    await MainPage.goToCart();
    await CartPage.productTitleIsDisplayed();
    expect(await CartPage.addedItemTitle.getText()).toHaveText(productName)
})


