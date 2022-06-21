function solution() {

    // fillled an object with products and their quantity
    let availableProducts = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    }

    // object with recipe for every product and how much counts of supplies needed for preparing it 
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2,
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20,
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3,
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1,
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10,
        }
    }


    // object with all the functions included
    let objOfCommands = {
        restock(product, quantity) {
            availableProducts[product] += Number(quantity);
            return 'Success';
        },
        prepare(product, count) {
            if (product == 'apple') {
                let entries = Object.entries(recipes[product]);
                if (availableProducts[entries[0][0]] >= Number(count) * entries[0][1]) {
                    if (availableProducts[entries[1][0]] >= Number(count) * entries[1][1]) {
                        availableProducts[entries[0][0]] -= Number(count) * entries[0][1];
                        availableProducts[entries[1][0]] -= Number(count) * entries[1][1];
                        return 'Success';
                    } else {
                        return `Error: not enough ${entries[1][0]} in stock`;
                    }
                } else {
                    return `Error: not enough ${entries[0][0]} in stock`;
                }
            } else if (product == 'lemonade') {
                let entries = Object.entries(recipes[product]);
                if (availableProducts[entries[0][0]] >= Number(count) * entries[0][1]) {
                    if (availableProducts[entries[1][0]] >= Number(count) * entries[1][1]) {
                        availableProducts[entries[0][0]] -= Number(count) * entries[0][1];
                        availableProducts[entries[1][0]] -= Number(count) * entries[1][1];
                        return 'Success';
                    } else {
                        return `Error: not enough ${entries[1][0]} in stock`;
                    }
                } else {
                    return `Error: not enough ${entries[0][0]} in stock`;
                }
            } else if (product == 'burger') {
                let entries = Object.entries(recipes[product]);
                if (availableProducts[entries[0][0]] >= Number(count) * entries[0][1]) {
                    if (availableProducts[entries[1][0]] >= Number(count) * entries[1][1]) {
                        if (availableProducts[entries[2][0]] >= Number(count) * entries[2][1]) {
                            availableProducts[entries[0][0]] -= Number(count) * entries[0][1];
                            availableProducts[entries[1][0]] -= Number(count) * entries[1][1];
                            availableProducts[entries[2][0]] -= Number(count) * entries[2][1];
                            return 'Success';
                        } else {
                            return `Error: not enough ${entries[2][0]} in stock`;
                        }
                    } else {
                        return `Error: not enough ${entries[1][0]} in stock`;
                    }
                } else {
                    return `Error: not enough ${entries[0][0]} in stock`;
                }
            } else if (product == 'eggs') {
                let entries = Object.entries(recipes[product]);
                if (availableProducts[entries[0][0]] >= Number(count) * entries[0][1]) {
                    if (availableProducts[entries[1][0]] >= Number(count) * entries[1][1]) {
                        if (availableProducts[entries[2][0]] >= Number(count) * entries[2][1]) {
                            availableProducts[entries[0][0]] -= Number(count) * entries[0][1];
                            availableProducts[entries[1][0]] -= Number(count) * entries[1][1];
                            availableProducts[entries[2][0]] -= Number(count) * entries[2][1];
                            return 'Success';
                        } else {
                            return `Error: not enough ${entries[2][0]} in stock`;
                        }
                    } else {
                        return `Error: not enough ${entries[1][0]} in stock`;  
                    }
                } else {
                    return `Error: not enough ${entries[0][0]} in stock`;
                }
            } else if (product == 'turkey') {
                let entries = Object.entries(recipes[product]);
                if (availableProducts[entries[0][0]] >= Number(count) * entries[0][1]) {
                    if (availableProducts[entries[1][0]] >= Number(count) * entries[1][1]) {
                        if (availableProducts[entries[2][0]] >= Number(count) * entries[2][1]) {
                            if (availableProducts[entries[3][0]] >= Number(count) * entries[3][1]) {
                                availableProducts[entries[0][0]] -= Number(count) * entries[0][1];
                                availableProducts[entries[1][0]] -= Number(count) * entries[1][1];
                                availableProducts[entries[2][0]] -= Number(count) * entries[2][1];
                                availableProducts[entries[3][0]] -= Number(count) * entries[3][1];
                                return 'Success';
                            } else {
                                return `Error: not enough ${entries[3][0]} in stock`;
                            }
                            
                        } else {
                            return `Error: not enough ${entries[2][0]} in stock`;
                        }
                    } else {
                        return `Error: not enough ${entries[1][0]} in stock`;
                    }
                } else {
                    return `Error: not enough ${entries[0][0]} in stock`;
                }
            }
        },
        report(obj) {
            let keys = Object.keys(obj);
            let values = Object.values(obj);
            let outputReport = [];
            for (let i = 0; i < keys.length; i++) {

                for (let j = i; j <= i; j++) {
                    outputReport.push(`${keys[i]}=${values[j]}`);
                }
            }
            return outputReport.join(' ');
        }
    }

    return result = (str) => {
        let splitedStr = str.split(' ');
        if (splitedStr[0] == 'restock') {
            return objOfCommands[splitedStr[0]](splitedStr[1], splitedStr[2]);
        } else if (splitedStr[0] == 'prepare') {
            return objOfCommands[splitedStr[0]](splitedStr[1], splitedStr[2]);
        } else if (splitedStr[0] == 'report') {
            return objOfCommands[splitedStr[0]](availableProducts);
        }
    }

}


let manager = solution();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10")); 
console.log(manager("prepare apple 1")); 
console.log(manager("restock fat 10")); 
console.log(manager("prepare burger 1")); 
console.log(manager("report")); 
// console.log(manager("prepare turkey 1")); 
// console.log(manager("restock flavour 10")); 
// console.log(manager("prepare turkey 1")); 
// console.log(manager("report")); 