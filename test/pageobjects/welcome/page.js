import {
    returnNumber
} from '../../utils/alphanumericConsts'
// classes to extend
import Page from '../page'
import Header from '../general/header.section'

// xmultiple - mixin library to extend multiple classes
const xmultiple = require('xmultiple');

class WelcomePage extends xmultiple(Page, Header) {

    constructor(...args) {
        super(...args);
    }

    /** define elements **/

    /**
     * elements to perform the actions with "Welcome Page"
     */
    get welcomePageUnderConstructTitle() {
        return browser.$('#title h2');
    };

    get welcomePageTitle() {
        return browser.$('#content h1');
    };

    get welcomePageCarousel() {
        return browser.$('div[id="j_idt41:j_idt43"] .flow');
    };

    /**
     * your page specific methods
     */
    waitForPageToLoad() {
        this.welcomePageUnderConstructTitle.waitForElementToRender();
        this.welcomePageTitle.waitForElementToRender();
        this.welcomePageCarousel.waitForElementToRender();
    }
}

export default new WelcomePage()