function generateDate(format, dateParam) {
    function dateFormat(customDate) {
        let date;
        if (customDate) date = new Date(customDate);
        else date = new Date();

        let hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;

        let min = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;

        let sec = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;

        let year = date.getFullYear();

        let month = date.getMonth() + 1;
        month = (month < 10 ? "0" : "") + month;

        let day = date.getDate();
        day = (day < 10 ? "0" : "") + day;

        return {
            hour,
            min,
            sec,
            year,
            month,
            day
        }
    };

    if (format === 'For test start time') {
        let date = dateFormat();
        return `Date: ${date.year}/${date.month}/${date.day} Time: ${date.hour}:${date.min}:${date.sec}`;
    }
    if (format === 'For test report name') {
        let date = dateFormat();
        return `${date.year}_${date.month}_${date.day}at${date.hour}_${date.min}_${date.sec}`;
    }
    if (format === 'To test list of all hotels') {
        let date = dateFormat(dateParam);
        return `${date.year}-${date.month}-${date.day}`;
    }
};

module.exports = {
    generateDate
};