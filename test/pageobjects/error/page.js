// classes to extend
import Page from '../page'
import Header from '../general/header.section'

// xmultiple - mixin library to extend multiple classes
const xmultiple = require('xmultiple');

class ErrorPage extends xmultiple(Page, Header) {

    constructor(...args) {
        super(...args);
    }

    /** define elements **/

    /**
     * elements to perform the actions with "Error Page"
     */
    get errorPageTitle() {
        return browser.$('//h1[text()="An Error Occurred:"]');
    };

    get errorPageStackTraceLink() {
        return browser.$('//a[text()[contains(.,"Stack Trace")]]');
    };

    get errorPageComponentTreeLink() {
        return browser.$('//a[text()[contains(.,"Component Tree")]]');
    };

    get errorPageScopedVariablesLink() {
        return browser.$('//a[text()[contains(.,"Scoped Variables")]]');
    };


    /**
     * your page specific methods
     */
    waitForPageToLoad() {
        this.errorPageTitle.waitForElementToRender();
        this.errorPageStackTraceLink.waitForElementToRender();
        this.errorPageComponentTreeLink.waitForElementToRender();
        this.errorPageScopedVariablesLink.waitForElementToRender();
    }
}

export default new ErrorPage()