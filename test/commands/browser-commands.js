import {
    roundDecimals,
    returnNumber,
    filterSpaces
} from '../utils/alphanumericConsts'
module.exports = {
    /**
     * Commands to interact with browser API 
     */
    getElementsStyle: function(selector, style) {
        let styleVal = browser.execute((selector, style) => {
            return window.getComputedStyle(document.querySelector(selector), null)[style];
        }, selector, style);
        return styleVal.value;
    },

    setElementsValue: function(selector, text) {
        browser.execute((selector, text) => {
            document.querySelector(selector).value = text;
        }, selector, text);
    },

    waitForElementsToRender: function(elements) {
        assert
            .isAbove(elements.length, 0,
                'Elements array is empty');
        elements.map(elem => {
            elem.waitForExist();
            elem.waitForVisible();
        });
    },

    waitForElementsToBeVisible: function(elements) {
        assert
            .isAbove(elements.length, 0,
                'Elements array is empty');
        elements.map((elem) => {
            assert.isTrue(browser.elementIdDisplayed(elem.ELEMENT).value, `Expect that element: ${elem} is visible.`);
        });
    },

    expectElementsTextToEqualGivenText: function(elements, textArr) {
        const elementsText = elements.map(element => {
            return returnNumber(element.getText());
        });
        expect(elementsText).to.deep.equal(textArr);
    }   
}