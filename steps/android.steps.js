const { Given, When, Then } = require('@wdio/cucumber-framework');
const HomePage = require('../pageobjects/android/home.page');
const LoginPage = require('../pageobjects/android/login.page')
const FormPage = require('../pageobjects/android/form.page.')

const testData = {
    email: "fakeemail@gmail.com",
    password: "pass1234"
};

Given(/^User goes to (login|form) tab$/, async (tab) => {
    await HomePage.goToTab(tab);
})

When(/^the user complete the signup form$/, async () => {
    await LoginPage.clickOnSignUp();
    await LoginPage.fillSignUpForm(testData.email, testData.password);
});

Then(/^the alert with '(?:.*?)' title is shown$/, async () => {
    await LoginPage.okAlert.waitForDisplayed();
    await LoginPage.acceptAlert();
    await driver.hideKeyboard();
});

When(/^the user complete the login fields$/, async () => {
    await LoginPage.login(testData.email, testData.password);
});

When(/^the user fills fields$/, async () => {
    await FormPage.fillForm("text");
});

Then(/^the alert with 'This button is active' title is shown$/, async () => {
    await FormPage.okAlert.waitForDisplayed();
    await FormPage.acceptAlert();
});
