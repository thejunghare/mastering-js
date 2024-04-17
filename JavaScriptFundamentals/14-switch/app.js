'use strict'

let day = 'monday'

switch (day) {
    case 'monday':
    case 'Tuesday': // group case
        console.log('Week day');
        break;
    default:
        console.log('Such day does not exist');
        break;
}