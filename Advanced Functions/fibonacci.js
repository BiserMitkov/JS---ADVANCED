function getFibonator() {

    let arr = [0, 1];

    return function() {
        
        let startingNum = arr.shift();
        let nextNum = arr.pop();
        arr.push(nextNum, startingNum + nextNum);
        return arr[0];
    }
}



let fib = getFibonator();
console.log(fib()); // 1
console.log(fib()); // 1
console.log(fib()); // 2
console.log(fib()); // 3
console.log(fib()); // 5
console.log(fib()); // 8
console.log(fib()); // 13

