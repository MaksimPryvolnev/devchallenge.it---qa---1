import WelcomePage from '../pageobjects/welcome/page'
import RegisterNewHotelPage from '../pageobjects/register-new-hotel/page'
import User from '../user/user';

const {
    Given
} = require('cucumber');

Given(/^User is on the ([^"]*) page$/, function (page) {
    switch (page) {
        case "welcome":
            this.setPage(page);
            WelcomePage.open('');
            WelcomePage.waitForPageToLoad();
            break;
        case "register new hotel":
            this.setPage(page);
            browser.url('http://localhost:8080/article/faces/hotel.xhtml');
            RegisterNewHotelPage.waitForPageToLoad();
            break;
        default:
            Page.open(page)
    }
});

Given(/^User is "([^"]*)"$/, function (userName) {
    // Add user
    this[userName] = new User(userName);
    this.currentUserName = userName;
});