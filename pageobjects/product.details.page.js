class ProductDetailsPage {
    get elementName() { return $('.name')}
    get addToCartButton() { return $('.btn.btn-success.btn-lg')}

    async addElementToCart() {
        await this.addToCartButton.click();
    }
}

module.exports = new ProductDetailsPage();
