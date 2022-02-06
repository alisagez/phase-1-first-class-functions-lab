// Code your solution in this file!

//ABOUT: This is the array that is referenced by other functions. It can also be added within each variable, but putting it at the global level allows reusing it within each function below.
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

//ABOUT: Declare the variable returnFirstTwoDrivers w/ const and assign anonymous function to it. The assigned function should accept an array of drivers as an argument and return first two drivers in the array.


const returnFirstTwoDrivers = function(drivers) {   
    return drivers.slice(0, 2);
}

//ABOUT: Declare a variable with const that is assigned an anonymous function. The assigned function should accept an array of driveers as an argument and return the last two drivers in the array.

const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

//ABOUT: This is an array containing two elements: the two functions previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

//ABOUT: This is a higher-order function that takes in one argument, an integer, and returns a function that will multiply a fare for a ride. E.g. if the argument is 4, then the fare will be multiplied by 4. 

function createFareMultiplier(fareMultiplier) {
    return function() {
       return (fareMultiplier * fareMultiplier);
    } 
}

//ABOUT: Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareDoubler() function accepts a fare as its lone argument and doubles it.

const fareDoubler = function(fareMultiplier) {
    return (fareMultiplier * 2);
}

//ABOUT: Declare a variable with const and assign a function returned by createFareMultiplier() to it. Invoke createFareMultiplier() in such a way that the new fareTripler() function accepts a fare as its lone argument and triples it.
const fareTripler = function(fareMultiplier){
    return (fareMultiplier * 3);
}

//ABOUT: This function takes two arguments: an array of drivers and either returnFirstTwoDrivers or returnLastTwoDrivers function. Based on these two arguments, the function should return either the first two drivers or the last two drivers.

const selectDifferentDrivers = (arrayOfDrivers, returnFirstTwoDrivers) => {
    return returnFirstTwoDrivers(arrayOfDrivers);
}