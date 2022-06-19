function solve() {
    let textareaElements = document.querySelectorAll('textarea');
    let buttonsElements = document.querySelectorAll('#exercise button');
    buttonsElements[0].addEventListener('click', generate);
    let tbodyElement = document.querySelector('tbody');

    function generate(e) {
        let counter = 0;
        let furniture = JSON.parse(textareaElements[0].value);
        for (let el of furniture) {
            let tableRowElement = document.createElement('tr');
            let paragraphForName = document.createElement('p');
            let imgElement = document.createElement('img');
            let paragraphForPrice = document.createElement('p');
            let paragraphForAverageFactor = document.createElement('p');
            for (let key in el) {
                if (key == 'img') {
                    imgElement.src = el[key];
                } else if (key == 'name') {
                    paragraphForName.textContent = el[key];
                } else if (key == 'price') {
                    paragraphForPrice.textContent = el[key];
                } else if (key == 'decFactor') {
                    paragraphForAverageFactor.textContent = el[key];
                }
            }
            let tdElementForImg = document.createElement('td');
            tdElementForImg.appendChild(imgElement);
            tableRowElement.appendChild(tdElementForImg);
            let tdForName = document.createElement('td');
            tdForName.appendChild(paragraphForName);
            tableRowElement.appendChild(tdForName);
            let tdForPrice = document.createElement('td');
            tdForPrice.appendChild(paragraphForPrice);
            tableRowElement.appendChild(tdForPrice);
            let tdForFactor = document.createElement('td');
            tdForFactor.appendChild(paragraphForAverageFactor);
            tableRowElement.appendChild(tdForFactor);
            let checkingBoxMark = document.createElement('input');
            checkingBoxMark.type = 'checkbox';
            let forMarkingTdElement = document.createElement('td');
            forMarkingTdElement.appendChild(checkingBoxMark);
            tableRowElement.appendChild(forMarkingTdElement);
            tbodyElement.appendChild(tableRowElement);
        }
    }
    let finalOutputArr = [];
    let finalPrice = 0;
    let finalAverageFactor = 0;
    let counterForFactor = 0;
    buttonsElements[1].addEventListener('click', buy);
    function buy(e) {
        let allTdElements = Array.from(document.querySelectorAll('tbody tr'));
        for (let el of allTdElements) {
            let purchasedFurnitures = [];
            let priceOfPurchasedFurnitures = 0;
            let averageDecorationFactor = 0;
            let currentTableRow = Array.from(el.children);
            let counter = 0;
            for (let ent of currentTableRow) {
                counter++;
                if (counter == 2) {
                    purchasedFurnitures.push(ent.children[0].textContent);
                } else if (counter == 3) {
                    priceOfPurchasedFurnitures += Number(ent.children[0].textContent);
                } else if (counter == 4) {
                    
                    averageDecorationFactor += Number(ent.children[0].textContent);
                } else if (counter == 5) {
                    if (ent.children[0].checked) {
                        for (let name of purchasedFurnitures) {
                            finalOutputArr.push(name);
                        }
                        finalPrice += priceOfPurchasedFurnitures;
                        finalAverageFactor += averageDecorationFactor;
                        counterForFactor++;
                    }
                }
            }
        }
        if (finalOutputArr.length > 1) {
            textareaElements[1].value = `Bought furniture: ${finalOutputArr.join(', ')}\nTotal price: ${finalPrice.toFixed(2)}\nAverage decoration factor: ${finalAverageFactor / counterForFactor}`;
        } else {
            textareaElements[1].value = `Bought furniture: ${finalOutputArr.join(', ')}\nTotal price: ${finalPrice.toFixed(2)}\nAverage decoration factor: ${finalAverageFactor}`;
        }

    }
}