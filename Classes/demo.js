class LibraryCollection {

    constructor(capacity) {
        this.capacity = capacity;
        this.books = [];
        this.tempObj = {};
    }

    addBook(bookName, bookAuthor) {
        if (this.books.length >= this.capacity) {
            throw new Error('Not enough space in the collection.');
        } else {
            this.tempObj[bookName] = {
                'author': bookAuthor,
                'payed': false
            };
            this.books.push(this.tempObj);
            return `The ${bookName}, with an author ${bookAuthor}, collect.`;
        }
    }

    payBook(bookName) {
        if (this.books.length > 0) {
            for (let el of this.books) {
                if (!el.hasOwnProperty(bookName)) {
                    throw new Error(`${bookName} is not in the collection.`);
                } else if (el.hasOwnProperty(bookName) && el[bookName]['payed'] == true) {
                    throw new Error(`${bookName} has already been paid.`);
                } else if (el.hasOwnProperty(bookName) && el[bookName]['payed'] !== true) {
                    el[bookName]['payed'] = true;
                    return `${bookName} has been successfully paid.`;
                }
            }
        } else {
            throw new Error(`${bookName} is not in the collection.`);
        }
    }

    removeBook(bookName) {

        if (this.books.length > 0) {
            for (let el of this.books) {
                if (!el.hasOwnProperty(bookName)) {
                    throw new Error(`The book, you're looking for, is not found.`);
                } else if (el.hasOwnProperty(bookName) && el[bookName]['payed'] == true) {
                    delete el[bookName];
                    return `${bookName} remove from the collection.`;
                } else if (el.hasOwnProperty(bookName) && el[bookName]['payed'] !== true) {
                    throw new Error(`${bookName} need to be paid before removing from the collection.`);
                }
            }
        } else {
            throw new Error(`The book, you're looking for, is not found.`);
        }
    }

    getStatistics(...params) {
        if (params.length <= 0) {
            let output = [];
            let leftSpace = this.capacity - this.books.length;
            let entries = Object.entries(this.tempObj).sort((a, b) => a[0].localeCompare(b[0]));
            for (let name of entries) {
                let currBookName = name[0];
                let payment = '';
                let currAuthor = '';
                for (let key in name[1]) {
                    if (key == 'payed') {
                        if (name[1].payed == true) {
                            payment = 'Has Paid';
                        } else {
                            payment = 'Not Paid';
                        }
                    } else if (key == 'author') {
                        currAuthor = name[1].author;
                    }
                }
                output.push(`${currBookName} == ${currAuthor} - ${payment}.`);
            }
            return `The book collection has ${leftSpace} empty spots left.\n${output.join('\n')}`;
        } else {
            let searchingAuthor = params[0];
            let output = [];
            let isiTPaid = '';
            for (let key in this.tempObj) {
                if (this.tempObj[key].author == searchingAuthor) {
                    if (this.tempObj[key].payed == false) {
                        isiTPaid = 'Not Paid';
                    } else {
                        isiTPaid = 'Has Paid';
                    }
                    output.push(`${key} == ${this.tempObj[key].author} - ${isiTPaid}.`);
                }
            }
            if (output.length > 0) {
                return output.join('\n');
            } else {
                throw new Error(`${searchingAuthor} is not in the collection.`);
            }
        }
    }


}