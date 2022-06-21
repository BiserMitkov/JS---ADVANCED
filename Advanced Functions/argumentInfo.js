function solve() {

    const params = Array.from(arguments);

    const types = {};

    for (let el of params) {
        const type = typeof el;
        console.log(`${type}: ${el}`);

        if (types[type] == undefined) {
            types[type] = 0;
        }
        types[type]++;
    }

    const result = Object.entries(types).sort((a, b) => b[1] - a[1]);

    for (let [type, count] of result) {
        console.log(`${type} = ${count}`);
    }

}
solve('cat', 42, function () { console.log('Hello world!'); })






