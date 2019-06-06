module.exports = {
    before: function before() {
        const chai = require('chai');
        const elementCommands = require('../commands/element-commands');
        const browserCommands = require('../commands/browser-commands');

        /**
         * Setup the Chai assertion framework
         */
        global.expect = chai.expect;
        global.assert = chai.assert;
        global.should = chai.should();

        /**
         * Setup the custom commands for elements and browser API
         */
        Object.keys(elementCommands).forEach(key => {
            browser.addCommand(key, elementCommands[key], true);
        });

        Object.keys(browserCommands).forEach(key => {
            browser.addCommand(key, browserCommands[key]);
        });


        /**
         * Set the browser screen size
         */
        // browser.windowHandleSize({ width: 1600, height: 768 })
        browser.windowHandleMaximize();
    }
}