function sumTable() {

    let productsPrizesEl = document.querySelectorAll('tr td:nth-of-type(2n)');

    let tempArr = Array.from(productsPrizesEl);

    let sum = 0;

    for (let i = 0; i < tempArr.length - 1; i++) {

        sum += Number(tempArr[i].textContent);
    }

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;

}