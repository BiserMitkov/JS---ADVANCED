function sort(input, str) {

    switch (str) {
        case 'asc': let result = input.sort((a, b) => a - b); return result;
        case 'desc': let output = input.sort((a, b) => b - a); return output;
    }

}
sort([14, 7, 17, 6, 8], 'asc')