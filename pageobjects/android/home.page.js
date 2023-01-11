const By = require('../../utils/by')

class HomePage {
    get loginTab() { return By.accessibilityId('Login') }
    get formsTab() { return By.accessibilityId('Forms') }

    async goToTab(tab) {
        await this.loginTab.click();
        const tabs = {
            login: () => { this.loginTab.click();},
            form: () => { this.formsTab.click();},
        };
        return tabs[tab]();
    }
}

module.exports = new HomePage();
