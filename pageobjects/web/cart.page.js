
class CartPage {
    get addedItemTitle() { return $('td:nth-child(2)')}

    async productTitleIsDisplayed() {
        await this.addedItemTitle.waitForDisplayed()
    }
}

module.exports = new CartPage();
