const array = [1, 2, 3, 4, 5, 6]; // 0,1,2,3,4,5

function multiplyByTwo(x) {
    return x * 2;
}

const twoFer = array.map((item, idx) => multiplyByTwo(item))

const newFer = array.filter((item, idx) => item%3 === 0)

// MAP FUNCTION
let twoFer = [];
for (let i=0; i< array.length, i+1) {
    const arrayElementTimesTwo = multiplyByTwo(array[i])
    twoFer.push(arrayElementTimesTwo);
}
console.log(twoFer);
// [2, 4, 6, 8, 10, 12]


// FILTER FUNCTION
let newFer = [];
for (let i=0; i < array.length, i+1) {
    if(array[i]%3 === 0){
        newFer.push(arrayElementTimesTwo);
    }
}
console.log(twoFer);
// [3, 6]