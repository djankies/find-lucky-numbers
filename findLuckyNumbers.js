// Write your code below this line.

// Given a number, n, return an array containing n unique random numbers between 1-10, inclusive. (That is, do not repeat any numbers in the returned list.)

// You can trust that this function will never be called with n < 0 or n > 10.


function makeLuckyArray(n) {
    let luckyNumbers = [];
    while (luckyNumbers.length < n) {
        let randomNumber = Math.floor(Math.random() * 10) + 1;
        if (!luckyNumbers.includes(randomNumber)) {
            luckyNumbers.push(randomNumber);
        }
    }
    return luckyNumbers
}

console.log(makeLuckyArray(10));