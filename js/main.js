// index.js
import moment from 'moment';

console.log("Hello from JavaScript!");
console.log(moment().startOf('day').fromNow());

var name = "Rob Hitt", time = "today";
console.log(`Hello ${name}, how are you ${time}?`);