const returnNumber = string => {
    if (typeof string === 'string') return Number(string.replace(/[^0-9\.]+/g, ''));
    return string;
}

const returnCamelCase = (str) => {
    if (str.indexOf(' ') > -1) {
        str = str.split(' ');
        for (var i = 0; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join('');
    }
    return str;
}

const returnLowerCamelCase = (str) => {
    if (str.indexOf(' ') > -1) {
        str = str.split(' ');
        str[0] = str[0].charAt(0).toLowerCase() + str[0].slice(1);
        for (var i = 1; i < str.length; i++) {
            str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
        }
        return str.join('');
    } else {
        str = str.charAt(0).toLowerCase() + str.slice(1);
    }
    return str;
}

module.exports = {
    returnNumber,
    returnCamelCase,
    returnLowerCamelCase
}