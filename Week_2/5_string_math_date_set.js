const date = new Date();

console.log(date);

console.log(date.toLocaleString().slice(0, 10));
// console.log(`${date.getFullYear()} ${date.getMonth()} ${date.getDay()}`);
console.log(date.toLocaleTimeString());

setTimeout(function() {
    console.log('2 seconds later');
}, 2000);

