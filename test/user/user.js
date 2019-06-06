import HotelInfo from './newHotelInfo'

class User {
    constructor(userName) {
        this.userName = userName;
        this.accountType = '';
        this.newHotelInfo = new HotelInfo();
    }
}

module.exports = User;