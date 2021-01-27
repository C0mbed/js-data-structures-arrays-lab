// Write your solution here!

const drivers = ['Milo', 'Otis', 'Garfield'];

function destructivelyAppendDriver(name) {
    drivers.push(name);
    return drivers;
};

function destructivelyPrependDriver(name) {
    drivers.unshift(name);
    return drivers;
};

function destructivelyRemoveLastDriver() {
    drivers.pop();
    return drivers;
};

function destructivelyRemoveFirstDriver() {
    drivers.shift();
    return drivers;
};

function appendDriver(name) {
    const newArray = [...drivers, name];
    return newArray;
};

function prependDriver(name) {
    const newArray = [name, ...drivers];
    return newArray;
};

function removeLastDriver() {
    let newArray = drivers.slice(0, drivers.length-1);
    return newArray;
};

function removeFirstDriver() {
    let newArray = drivers.slice(1);
    return newArray; 
};