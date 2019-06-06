import {
    returnNumber
} from '../../utils/alphanumericConsts'
let {
    generateDate
} = require('../../utils/getDate');
// classes to extend
import Page from '../page'
import Header from '../general/header.section'

// xmultiple - mixin library to extend multiple classes
const xmultiple = require('xmultiple');

class ListOfAllHotelsPage extends xmultiple(Page, Header) {

    constructor(...args) {
        super(...args);
    }

    /** define elements **/

    /**
     * elements to perform the actions with "List Of All Hotels Page"
     */
    get listOfAllHotelsTitle() {
        return browser.$('//div[@id="title"]//h2[text()="List of all hotels"]');
    };

    get listOfAllHotelsLastRowCells() {
        return browser.$$('tbody[id="j_idt40:hotels_data"] tr:last-of-type td');
    };

    get listOfAllHotelsLastPaginationNum() {
        return browser.$('div[id="j_idt40:hotels_paginator_bottom"] .ui-paginator-pages span:last-of-type');
    };

    get listOfAllHotelsSeekToTheEndPagination() {
        return browser.$('div[id="j_idt40:hotels_paginator_bottom"] .ui-icon.ui-icon-seek-end');
    };


    /**
     * your page specific methods
     */
    waitForPageToLoad() {
        this.listOfAllHotelsTitle.waitForElementToRender();
        browser.waitForElementsToRender(this.listOfAllHotelsLastRowCells);
    }

    checkThatLastRowInfoMatchesUsersInfo(user) {
        if (this.listOfAllHotelsSeekToTheEndPagination.type !== 'NoSuchElement') {
            this.listOfAllHotelsSeekToTheEndPagination.waitAndClickOnElement();
            this.waitForPageToLoad();
        }

        const nameFromUser = user.newHotelInfo.nameField;
        const name = this.listOfAllHotelsLastRowCells[0].getText();

        const shortDescriptionFromUser = user.newHotelInfo.shortDescriptionField;
        const shortDescription = this.listOfAllHotelsLastRowCells[1].getText();

        const starRateFromUser = returnNumber(user.newHotelInfo.globalRatingField);
        const starRate = returnNumber(this.listOfAllHotelsLastRowCells[2].getText());

        const constructionDateFromUser = user.newHotelInfo.dateOfConstructionField;
        const dateArr = constructionDateFromUser.split('/');
        const month = dateArr[0];
        const day = dateArr[1];
        const year = dateArr[2];
        const formatedDateFromUser = generateDate("To test list of all hotels", `20${year}, ${month}, ${day}`);
        const constructionDate = this.listOfAllHotelsLastRowCells[3].getText();

        const cityFromUser = user.newHotelInfo.cityField;
        const city = this.listOfAllHotelsLastRowCells[4].getText();

        const countryFromUser = user.newHotelInfo.countryField;
        const country = this.listOfAllHotelsLastRowCells[5].getText();

        assert.equal(nameFromUser, name, `Name in table should match with users input: ${name} !== ${nameFromUser}`);
        assert.equal(shortDescriptionFromUser, shortDescription, `Short description in table should match with users input: ${shortDescription} !== ${shortDescriptionFromUser}`);
        assert.equal(starRateFromUser, starRate, `Star Rate in table should match with users input: ${starRate} !== ${starRateFromUser}`);
        assert.equal(formatedDateFromUser, constructionDate, `Construction Date in table should match with users input: ${constructionDate} !== ${formatedDateFromUser}`);
        assert.equal(cityFromUser, city, `City in table should match with users input: ${city} !== ${cityFromUser}`);
        assert.equal(countryFromUser, country, `Country in table should match with users input: ${country} !== ${countryFromUser}`);
    }
}

export default new ListOfAllHotelsPage()