import WelcomePage from '../pageobjects/welcome/page'
import ErrorPage from '../pageobjects/error/page'
import RegisterNewHotelPage from '../pageobjects/register-new-hotel/page'
import ListOfAllHotelsPage from '../pageobjects/list-of-all-hotels/page'

const {
    returnCamelCase
} = require('../utils/alphanumericConsts');

const {
    Then
} = require('cucumber');

Then(/^User should see that ([^"]*) page is displayed$/, function (page) {
    switch (page) {
        case "welcome":
            this.setPage(page);
            WelcomePage.waitForPageToLoad();
            break;
        case "Register new Hotel":
            this.setPage(page);
            RegisterNewHotelPage.waitForPageToLoad();
            break;
        default:
            throw new Error(`There is no such page: ${page}`)
    }
});

Then(/^User should see that ([^"]*) is displayed on Register new Hotel$/, function (element) {
    element = returnCamelCase(element);
    RegisterNewHotelPage[`registerNewHotel${element}`].waitForElementToRender();
});

Then(/^User should see that ([^"]*) is displayed in Data section of Register new Hotel page$/, function (element) {
    element = returnCamelCase(element);
    RegisterNewHotelPage[`registerNewHotel${element}`].waitForElementToRender();
});

Then(/^User should see that ([^"]*) field is marked with asterisk$/, function (text) {
    RegisterNewHotelPage.getRegisterNewHotelAsteriskNextToLabelWithText(text + ':').waitForElementToRender();
});

Then(/^User should see that ([^"]*) (field|dropdown) is editable$/, function (elementText, elType) {
    if(elType == 'field') RegisterNewHotelPage.checkThatFieldIsEditable(elementText);
    else RegisterNewHotelPage.checkThatDropDownIsEditable(elementText);
});

Then(/^User should see that ([^"]*) field allows to input alphanumeric characters$/, function (elementText) {
    RegisterNewHotelPage.checkThatFieldAllowsToInputAlphanumericChars(elementText);
});

Then(/^User should see that a (required error|format error) message is displayed for ([^"]*) field$/, function (errorType, element) {
    element = returnCamelCase(element);
    errorType = returnCamelCase(errorType);
    RegisterNewHotelPage[`registerNewHotel${element}${errorType}`].waitForElementToRender();
});

Then(/^User should see that hotel was added to the list$/, function () {
    ListOfAllHotelsPage.waitForPageToLoad();
    ListOfAllHotelsPage.checkThatLastRowInfoMatchesUsersInfo(this[this.currentUserName]);
});

Then(/^User should see that Global Rating field allows to rate the hotel ([^"]*)$/, function (rating) {
    RegisterNewHotelPage.waitForPageToLoad();
    RegisterNewHotelPage.checkThatGlobalRatingFieldAlowsToRateHotelFrom(rating);
});