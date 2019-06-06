import {
    roundDecimals,
    returnNumber,
    filterSpaces,
    returnRandomNumber
} from '../utils/alphanumericConsts'

export default class Page {
    open(path) {
        browser.url(path);
    }

    moveToElementByText(text) {
        const selector = `//*[text()="${text}"]`;
        const element = browser.$(selector);
        element.waitForVisible();
        browser.moveToObject(selector);
    }
}