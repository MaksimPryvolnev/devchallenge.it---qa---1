module.exports = {
    /**
     * Commands to interact with element API
     */
    waitAndClickOnElement: function () {
        this.waitForExist();
        this.waitForVisible();
        this.click();
    },

    waitForElementToRender: function () {
        this.waitForExist();
        this.waitForVisible();
    },

    waitForElementToHaveText: function () {
        browser.waitUntil(function () {
            return this.getText().length > 0;
        }, 60000, 'expected text to be grater than 0');
    },

    waitForElementWithCondition(condition, time) {
        condition !== ' not' ? this.waitForVisible(time) : this.waitForVisible(time, true);
    },

    expectElementHasText(text) {
        let elementsText = this.getText();
        expect(elementsText).to.equal(text);
    }
}