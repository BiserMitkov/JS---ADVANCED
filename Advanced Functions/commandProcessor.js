function solution() {

    let str = '';

    return {
        append(text) {
            return str += text;
        },

        removeStart(number) {
            let result = str.substring(0, number);
            str = str.replace(result, '');
        },

        removeEnd(number) {
            let sub = '';
            let splicedPart = str.split('').splice(str.length - number, number).forEach(el => sub += el);
            str = str.replace(sub, '');
        },

        print() {
            console.log(str);
        }
    }
}





let secondZeroTest = solution();

secondZeroTest.append('123');
secondZeroTest.append('45');
secondZeroTest.removeStart(2);
secondZeroTest.removeEnd(1);
secondZeroTest.print();

