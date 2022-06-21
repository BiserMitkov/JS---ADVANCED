function add(n) {
    
    const inner = function (a) {
        n += a;
        return inner;
    };
    inner.valueOf = function () {
        return n;
    };
    return inner;
}



console.log(add(1)(5))