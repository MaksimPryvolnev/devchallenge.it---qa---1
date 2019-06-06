
class Header {
    /**
     * 
     *  define elements
     * 
     *  elements to perform the actions with "Header section"
     */
    get homepageLogo() {
        return browser.$('')
    }

    /**
     * your page specific methods
     */

    getMenuLinkByText(text, element = true) {
        const selector = `//span[@class='ui-menuitem-text' and text()='${text}']`;
        if (element) return browser.$(selector);
        return selector;
    }

    moveToMenuLinkByText(text) {
        this.getMenuLinkByText(text).waitForVisible();
        this.getMenuLinkByText(text).moveToObject();
    }
}

module.exports = Header;