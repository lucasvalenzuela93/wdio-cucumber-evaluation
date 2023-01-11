const By = require('../../utils/by')

class FormPage {
    get textImput() { return By.accessibilityId('text-input') }
    get dropdown() { return $('//android.view.ViewGroup[@content-desc="Dropdown"]/android.view.ViewGroup/android.widget.EditText') }
    get firstDropdownItem() { return $('//hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')}
    get activeButton() { return $('/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/androidx.appcompat.widget.LinearLayoutCompat/android.widget.FrameLayout/android.widget.ListView/android.widget.CheckedTextView[2]')}
    get okAlert() { return $('/hierarchy/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.Button[3]')}

    async fillTextFiel(text) {
        await this.textImput.click();
        await this.textImput.setValue(text);
        await driver.hideKeyboard();
    }

    async selectDropdown() {
        await this.dropdown.click();
        await this.firstDropdownItem.click()
    }

    async tapActive() {
        await this.activeButton.click()
    }

    async swipeByCoordinates(topX, topY, bottomX, bottomY) {
        await driver.touchPerform([
            { action: 'press', options: { x: topX, y: topY }},
            { action: 'wait', options: { ms: 200 }},
            { action: 'moveTo', options: { x: bottomX, y: bottomY }},
            { action: 'release'},
        ])
    }

    async fillForm(text) {
        await this.fillTextFiel(text);
        await this.selectDropdown();
        await this.swipeByCoordinates(700, 110, 700, 550) //Not working
        await this.tapActive();
    }

    async acceptAlert() {
        await this.okAlert.click()
    }

}

module.exports = new FormPage();
