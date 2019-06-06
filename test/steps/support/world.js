var { setWorldConstructor } = require('cucumber');

function CustomWorld({ attach, parameters }) {
    this.page = '';
    this.attach = attach;
    this.parameters = parameters;

    this.setPage = function (page) {
        this.page = page;
    }
};

setWorldConstructor(CustomWorld);
