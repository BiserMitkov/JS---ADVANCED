function solution(number){
    
    let calc = (a, b) => {
        return a + b;
    }

    return calc.bind(null, number);
}
    
let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
