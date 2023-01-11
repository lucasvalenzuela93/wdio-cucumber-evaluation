
/**
 * sub page containing specific selectors and methods for a specific page
 */
class MainPage {
    /**
     * define selectors using getter methods
     */
    get navbarBrand() { return $('#nava')}
    get signupButton() { return $('#signin2');}
    get loginButton() { return $('#login2')}
    get logoutButton() { return $('#logout2')}
    get cartButton() { return $('#cartur')}
    get signupLabel() { return $('#signInModalLabel')}
    get loginLabel() { return $('#logInModalLabel')}
    get inputUsername() { return $('#sign-username');}
    get inputPassword() { return $('#sign-password');}
    get confirmSignup() { return $('#signInModal .btn-primary');}
    get confirmLogIn() { return $('#logInModal .btn-primary')}
    get inputLoginUsername() { return $('#loginusername')}
    get inputLoginPassword() { return $('#loginpassword')}
    get nameOfUser() { return $('#nameofuser')}
    get itemLaptop() { return $('//a[contains(text(),"Laptops")]')}
    get laptopCardsText() { return $$('//p[contains(text(),"laptop")]')}
    get firstLaptopDetails() { return $('.col-lg-4:nth-child(1) .hrefch')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async awaitNavigationBarIsDisplayed() {
        await this.navbarBrand.waitForDisplayed();
    }

    async clickOnSignUp() {
        await this.signupButton.click();
        await this.signupLabel.waitForDisplayed();
    }

    async completeSignupForm(username, password) {
        await this.inputUsername.click();
        await this.inputUsername.setValue(username);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.confirmSignup.waitForDisplayed();
        await this.confirmSignup.click();
        await browser.pause(1000) //waits to alert to be shown
    }

    async clickOnLogin() {
        await this.loginButton.click();
        await this.loginLabel.waitForDisplayed();
    }

    async login(username, password) {
        await this.clickOnLogin();
        await this.inputLoginUsername.click();
        await this.inputLoginUsername.setValue(username);
        await this.inputLoginPassword.click();
        await this.inputLoginPassword.setValue(password);
        await this.confirmLogIn.waitForDisplayed();
        await this.confirmLogIn.click();
        await browser.pause(1000) //waits to alert to be shown
    }

    async logout() {
        await this.logoutButton.click();
        await this.loginButton.waitForDisplayed();
    }

    async goToLaptopsList() {
        await this.itemLaptop.click();
    }

    async waitLaptopCardsAreDisplayed() {
        await browser.waitUntil(
            async () => await this.laptopCardsText.length > 0
            , undefined
            ,"Laptops cards are not displayed"
        );
    }

    async goToDetailsFirstLaptop() {
        await this.firstLaptopDetails.click();
    }

    async goToCart() {
        await this.cartButton.click();
    }
}

module.exports = new MainPage();
