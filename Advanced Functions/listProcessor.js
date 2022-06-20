function solve(arr) {

    let output = [];

    let commandsObj = {
        add(arr, word) {
            return arr.push(word);
        },

        remove(arr, word) {
            
            while (arr.includes(word)) {
                let index = arr.indexOf(word);
                arr.splice(index, 1);
            }
        },

        print(arr) {
            return console.log(arr.join(','));
        }
    }

    return arr.forEach(el => {

        let [command, text] = el.split(' ');

        if (command == 'add') {
            commandsObj.add.call(null, output, text);
        } else if (command == 'remove') {
            commandsObj.remove.call(null, output, text);
        } else {
            commandsObj.print.call(null, output);
        }
    })
}
solve(['add pesho', 'add george', 'add peter', 'remove peter','print'])