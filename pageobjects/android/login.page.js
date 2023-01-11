const By = require('../../utils/by')

class LoginPage {
    get signUp() { return $('//android.view.ViewGroup[@content-desc="button-sign-up-container"]/android.view.ViewGroup/android.widget.TextView') }
    get inputEmail() { return By.accessibilityId('input-email')}
    get inputPassword() { return By.accessibilityId('input-password')}
    get inputConfirmPassword() { return By.accessibilityId('input-repeat-password')}
    get signUpButton() { return By.accessibilityId('button-SIGN UP')}
    get loginButton() { return $('//android.view.ViewGroup[@content-desc="button-LOGIN"]/android.view.ViewGroup')}
    get okAlert() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button')}

    async clickOnSignUp() {
        await this.signUp.click();
    }

    async fillSignUpForm(email, password) {
        await this.inputEmail.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.inputConfirmPassword.click();
        await this.inputConfirmPassword.setValue(password);
        await this.signUpButton.click();
    }

    async login(email, password) {
        await this.inputEmail.click();
        await this.inputEmail.setValue(email);
        await this.inputPassword.click();
        await this.inputPassword.setValue(password);
        await this.loginButton.click();
    }

    async acceptAlert() {
        await this.okAlert.click()
    }

}

module.exports = new LoginPage();
