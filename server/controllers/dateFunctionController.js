
function currentDate(date, num = 0) {
    let d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + (d.getDate() + num) ,
        year = d.getFullYear();

    if (month.length < 2) month = '0' + month;
    if (day.length < 2) day = '0' + day;

    return [year, month, day].join('-');
};

// function datePlusOne(date) {
//     let d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + (d.getDate() + 1),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// };

// function datePlusTwo(date) {
//     let d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + (d.getDate() + 2),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// };

// function datePlusThree(date) {
//     let d = new Date(date),
//         month = '' + (d.getMonth() + 1),
//         day = '' + (d.getDate() + 3),
//         year = d.getFullYear();

//     if (month.length < 2) month = '0' + month;
//     if (day.length < 2) day = '0' + day;

//     return [year, month, day].join('-');
// }; 

module.exports = currentDate 