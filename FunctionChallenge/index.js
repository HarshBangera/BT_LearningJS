const getCelcius = (F) => (F - 32) * 5 / 9;

console.log(`The temperation is ${getCelcius(-50)} \xB0C`);

const minMax = (arr) => ({
    min: Math.min(...arr),
    max: Math.max(...arr),
});

console.log(minMax([1, 2, 3, 4, 5]));

(function rectangleArea(l, b){
    console.log(`Are of rectangle with length ${l} and breadth ${b} is ${l*b}`);
})(5,10)