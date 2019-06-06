import {
    returnNumber,
    returnLowerCamelCase,
    returnCamelCase,
} from '../../utils/alphanumericConsts'
// classes to extend
import Page from '../page'
import Header from '../general/header.section'

// xmultiple - mixin library to extend multiple classes
const xmultiple = require('xmultiple');

class RegisterNewHotelPage extends xmultiple(Page, Header) {

    constructor(...args) {
        super(...args);
    }

    /** define elements **/

    /**
     * elements to perform the actions with "New Hotel Page"
     */
    get registerNewHotelTitle() {
        return browser.$('//div[@id="title"]//h2[text()="Register new Hotel"]');
    };

    get registerNewHotelNameField() {
        return browser.$('#add_hotel input[id="add_hotel:name"]');
    };

    get registerNewHotelCountryField() {
        return browser.$('#add_hotel label[id="add_hotel:country_label"]');
    };

    get registerNewHotelCityField() {
        return browser.$('#add_hotel label[id="add_hotel:city_label"]');
    };

    get registerNewHotelRatingCancelButton() {
        return browser.$('.ui-rating-cancel');
    };

    get registerNewHotelGlobalRatingField() {
        return browser.$('div[id="add_hotel:rate"]');
    };

    get registerNewHotelDateOfConstructionButton() {
        return browser.$('input[id="add_hotel:dateOfConstruction_input"] + button');
    };

    get registerNewHotelDateOfConstructionField() {
        return browser.$('input[id="add_hotel:dateOfConstruction_input"]');
    };

    get registerNewHotelCountryDropdownLabel() {
        return browser.$('label[id="add_hotel:country_label"]');
    };

    get registerNewHotelCityDropdownLabel() {
        return browser.$('label[id="add_hotel:city_label"]');
    };

    get registerNewHotelShortDescriptionField() {
        return browser.$('input[id="add_hotel:short_description"]');
    };

    get registerNewHotelDescriptionField() {
        return browser.$('textarea[id="add_hotel:description"]');
    };

    get registerNewHotelNotesField() {
        return browser.$('textarea[id="add_hotel:notes"]');
    };

    get registerNewHotelSaveButton() {
        return browser.$('button[id="add_hotel:j_idt62"]');
    };

    get registerNewHotelDataSection() {
        return browser.$('#add_hotel');
    };

    get registerNewHotelNameRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="Name: Validation Error: Value is required."]');
    };

    get registerNewHotelDateOfConstructionRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="Date of Construction: Validation Error: Value is required."]');
    };

    get registerNewHotelDateOfConstructionFormatError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()[contains(.,"could not be understood as a date. Example: ")]]');
    };

    get registerNewHotelCountryRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="Country: Validation Error: Value is required."]');
    };

    get registerNewHotelCityRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="City: Validation Error: Value is required."]');
    };

    get registerNewHotelShortDescriptionRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="Short Description: Validation Error: Value is required."]');
    };

    get registerNewHotelDescriptionRequiredError() {
        return browser.$('//span[@class="ui-message-error-detail" and text()="Description: Validation Error: Value is required."]');
    };

    /**
     * your page specific methods
     */

    waitForPageToLoad() {
        this.registerNewHotelTitle.waitForElementToRender();
        assert.isTrue(this.isRegisterNewHotelPage(), `Register new Hotel page should load but got: ${browser.getUrl()}`);
    }

    isRegisterNewHotelPage() {
        if (~browser.getUrl().indexOf('article/faces/hotel.xhtml')) return true;
        return false;
    }

    // First element here is cancelation button thats why adding 1 to num
    getRegisterNewHotelRatingStarLinkByNum(num) {
        return browser.$(`div[id='add_hotel:rate'] .ui-rating-star:nth-child(${num+1})`);
    };

    getRegisterNewHotelRatingSelectedStarLinkByNum(num) {
        return browser.$(`div[id='add_hotel:rate'] .ui-rating-star.ui-rating-star-on:nth-child(${num+1})`);
    };

    getRegisterNewHotelDayLinkByNum(num) {
        return browser.$(`//a[@class="ui-state-default" and text()='${num}']`);
    };

    getRegisterNewHotelAsteriskNextToLabelWithText(text) {
        return browser.$(`//label[text()="${text}"]//span[@class="ui-outputlabel-rfi"]`);
    };

    getRegisterNewHotelFormLeftLabelByNum(num) {
        return browser.$(`tbody tr:nth-child(${num}) td > label`);
    };

    getRegisterNewHotelFormLeftLabelByText(text) {
        return browser.$(`//td//label[text()="${text}"]`);
    };

    getRegisterNewHotelCountryByText(text) {
        return browser.$(`//div[@id="add_hotel:country_panel"]//li[@class="ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all" and text()="${text}"]`);
    };

    getRegisterNewHotelHighlightedCountryByText(text) {
        return browser.$(`//div[@id="add_hotel:country_panel"]//li[@class="ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all ui-state-highlight" and text()="${text}"]`);
    };

    getRegisterNewHotelHighlightedCityByText(text) {
        return browser.$(`//div[@id="add_hotel:city_panel"]//li[@class="ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all ui-state-highlight" and text()="${text}"]`);
    };

    getRegisterNewHotelCityByText(text) {
        return browser.$(`//div[@id="add_hotel:city_panel"]//li[@class="ui-selectonemenu-item ui-selectonemenu-list-item ui-corner-all" and text()="${text}"]`);
    };

    checkThatFieldIsEditable(element) {
        element = returnCamelCase(element);
        let textToEneter = 'Abcdefgh';
        if (~element.indexOf('Date')) textToEneter = '123456789'
        this[`registerNewHotel${element}Field`].waitForElementToRender();
        this[`registerNewHotel${element}Field`].setValue(textToEneter);
        let elementText = browser.execute((selector) => {
            return document.querySelector(selector).value;
        }, this[`registerNewHotel${element}Field`].selector);
        assert.equal(elementText.value, textToEneter, `Expected that element should be edited with text.`);
    };

    checkThatDropDownIsEditable(element) {
        element = returnCamelCase(element);
        let text;
        ~element.indexOf("Country") ? text = "Ukraine" : text = "Kyiv";

        this[`registerNewHotel${element}DropdownLabel`].waitAndClickOnElement();
        this[`getRegisterNewHotel${element}ByText`](text).waitAndClickOnElement();

        let elementText = this[`registerNewHotel${element}DropdownLabel`].getText();

        assert.equal(elementText, text, `Expected that dropdown should be editable.`);

        // Return dropdown value to previous
        this[`registerNewHotel${element}DropdownLabel`].waitAndClickOnElement();
        this[`getRegisterNewHotel${element}ByText`]('Select one').waitAndClickOnElement();
    };

    checkThatFieldAllowsToInputAlphanumericChars(element) {
        element = returnCamelCase(element);
        const textToEneter = 'Abc123efgh456';
        this[`registerNewHotel${element}Field`].waitForElementToRender();
        this[`registerNewHotel${element}Field`].setValue(textToEneter);
        let elementText = browser.execute((selector) => {
            return document.querySelector(selector).value;
        }, this[`registerNewHotel${element}Field`].selector);

        assert.equal(elementText.value, textToEneter, `Expected that element(registerNewHotel${element}Field) should be edited with text.`);
    };

    checkThatGlobalRatingFieldAlowsToRateHotelFrom(nums) {
        nums = nums.split('-');
        // Adding 1 to number because css and xpath selectors are starting from 1
        const firstNum = returnNumber(nums[0]) + 1;
        const lastNum = returnNumber(nums[1]) + 1;
        for (let i = firstNum; i < lastNum; i++) {
            this.getRegisterNewHotelRatingStarLinkByNum(i).waitAndClickOnElement();
            if (i > 1) {
                for (let star = 1; star < i; star++) {
                    this.getRegisterNewHotelRatingSelectedStarLinkByNum(star).waitForElementToRender();
                }
            }
        }
        // Click on cancel rating button and check that stars are not selected now
        this.registerNewHotelRatingCancelButton.waitAndClickOnElement();
        for (let star = 1; star < 6; star++) {
            this.getRegisterNewHotelRatingSelectedStarLinkByNum(star).waitForVisible(browser.options.waitforTimeout, true);
        }
    };
}

export default new RegisterNewHotelPage()