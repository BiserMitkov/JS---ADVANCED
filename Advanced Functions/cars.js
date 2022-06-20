function solve(input) {

    let cars = {};
    let copies = {};
    let print = [];
    for (let el of input) {

        let splitEl = el.split(' ');

        if (splitEl.includes('create') && !splitEl.includes('inherit')) {

            cars[splitEl[1]] = {};

        } else if (splitEl.includes('create') && splitEl.includes('inherit')) {
            if (cars.hasOwnProperty(splitEl[3])) {
                copies[splitEl[1]] = Object.create(cars[splitEl[3]]);
                copies[splitEl[1]][splitEl[3]] = splitEl[3];
            } else if (copies.hasOwnProperty(splitEl[3])) {
                copies[splitEl[1]] = Object.create(copies[splitEl[3]]);
                copies[splitEl[1]][splitEl[3]] = splitEl[3];
            }
        } else if (splitEl.includes('set')) {

            if (cars.hasOwnProperty(splitEl[1])) {
                cars[splitEl[1]][splitEl[2]] = splitEl[3];
            } else if (copies.hasOwnProperty(splitEl[1])) {
                copies[splitEl[1]][splitEl[2]] = splitEl[3];
            }
        } else if (splitEl.includes('print')) {
            print.push(splitEl[1]);
        }
    }

    for (let key in copies) {
        let values = Object.values(copies[key]);
        let currKey = values[0];
        delete copies[key][currKey];
        if (cars.hasOwnProperty(currKey)) {

            for (let prop in cars[currKey]) {
                copies[key][prop] = cars[currKey][prop];
            }
        } else if (copies.hasOwnProperty(currKey)) {

            for (let prop in copies[currKey]) {
                copies[key][prop] = copies[currKey][prop];
            }
        }
    }

    for (let el of print) {
        let output = [];
        if (cars.hasOwnProperty(el)) {
            for (let property in cars[el]) {
                output.push(`${property}:${cars[el][property]}`);
            }
        } else if (copies.hasOwnProperty(el)) {
            for (let prt in copies[el]) {
                output.push(`${prt}:${copies[el][prt]}`);
            }
        }
        console.log(output.join(','));
    }
   




    

}
solve(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)