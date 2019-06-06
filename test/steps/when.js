import WelcomePage from '../pageobjects/welcome/page'
import RegisterNewHotelPage from '../pageobjects/register-new-hotel/page'

const {
    returnNumber,
    returnCamelCase,
    returnLowerCamelCase
} = require('../utils/alphanumericConsts');

const {
    When
} = require('cucumber');

// 
// Universal steps (for several pages)
// 

When(/^User selects "([^"]*)"$/, (menuText) => {
    if (~menuText.indexOf('->')) {
        const menuTextArr = menuText.split('->');
        menuTextArr.forEach((text, index, array) => {
            if (index < array.length - 1) {
                RegisterNewHotelPage.moveToMenuLinkByText(text);
            } else {
                RegisterNewHotelPage.getMenuLinkByText(text).waitAndClickOnElement();
            }
        });
    }
});

When(/^User (adds|sets|sets from console) "([^"]*)" to the input ([^"]*)$/, function (action, value, el) {
    let element = returnCamelCase(el);
    this[this.currentUserName].newHotelInfo[returnLowerCamelCase(el)] = value;
    switch (action) {
        case 'adds':
            RegisterNewHotelPage[`registerNewHotel${element}`].addValue(value);
            break;
        case 'sets':
            RegisterNewHotelPage[`registerNewHotel${element}`].setValue(value);
            break;
        case 'sets from console':
            browser.setElementsValue(RegisterNewHotelPage[`registerNewHotel${element}`].selector, value)
    }
});

When(/^User clicks on the element ([^"]*)$/, function (el) {
    RegisterNewHotelPage[el].waitAndClickOnElement();
});

When(/^User clicks on ([^"]*) rating star$/, function (star) {
    star = returnNumber(star);
    this[this.currentUserName].newHotelInfo.globalRatingField = star;
    RegisterNewHotelPage.getRegisterNewHotelRatingStarLinkByNum(star).waitAndClickOnElement();
});

When(/^User selects ([^"]*) from ([^"]*) dropdown$/, function (text, el) {
    this[this.currentUserName].newHotelInfo[`${returnLowerCamelCase(el)}Field`] = text;
    RegisterNewHotelPage[`registerNewHotel${el}DropdownLabel`].waitAndClickOnElement();
    RegisterNewHotelPage[`getRegisterNewHotel${el}ByText`](text).waitAndClickOnElement();
});

When(/^User clicks on the back button$/, function () {
    browser.back();
})

When(/^User presses on the "([^"]*)" button( "([^"]*)" (time|times))*$/, (button, quantity) => {
    quantity = Number(quantity);
    if (quantity) {
        for (let i = 0; i < quantity; i++) {
            browser.keys(button);
        }
    } else {
        browser.keys(button);
    }
});