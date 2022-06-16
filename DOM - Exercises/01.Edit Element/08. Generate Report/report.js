function generateReport() {

    let checkBoxesElements = document.querySelectorAll('input[type="checkbox"]');
    let outputElement = document.getElementById('output');
    let output = {};

    let tbodyChildrenElements = document.querySelectorAll('tbody tr');
    let counter = 0;
    for (let box of checkBoxesElements) {

        if (box.checked) {
            
            let propertyName = box.name;
            console.log(propertyName);
            output[propertyName] = [];

            for (let el of tbodyChildrenElements) {
                output[propertyName].push(el.children[counter]);
            }
            counter++;
            
        } else {
            counter++;
        }
    }

    let keysOfOutput = Object.keys(output);
    let result = [];

    if (keysOfOutput.length == 1) {
        let firstSection = keysOfOutput.shift();
        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            result.push(tempObj);
        }
        

    } else if (keysOfOutput.length == 2) {
        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
            }
            result.push(tempObj);
        }

    } else if (keysOfOutput.length == 3) {

        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();
        let thirdSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
                for (let third = sec; third <= sec; third++) {
                    tempObj[thirdSection] = output[thirdSection][third].textContent;
                }
                result.push(tempObj);
            }
        }

    } else if (keysOfOutput.length == 4) {

        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();
        let thirdSection = keysOfOutput.shift();
        let fourthSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
                for (let third = sec; third <= sec; third++) {
                    tempObj[thirdSection] = output[thirdSection][third].textContent;
                    for (let fourth = third; fourth <= third; fourth++) {
                        tempObj[fourthSection] = output[fourthSection][fourth].textContent;
                    }
                    result.push(tempObj);
                }
            }
        }

    } else if (keysOfOutput.length == 5) {

        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();
        let thirdSection = keysOfOutput.shift();
        let fourthSection = keysOfOutput.shift();
        let fifthSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
                for (let third = sec; third <= sec; third++) {
                    tempObj[thirdSection] = output[thirdSection][third].textContent;
                    for (let fourth = third; fourth <= third; fourth++) {
                        tempObj[fourthSection] = output[fourthSection][fourth].textContent;
                        for (let five = fourth; five <= fourth; five++) {
                            tempObj[fifthSection] = output[fifthSection][five].textContent
                        }
                        result.push(tempObj);
                    }
                }
            }
        }

    } else if (keysOfOutput.length == 6) {

        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();
        let thirdSection = keysOfOutput.shift();
        let fourthSection = keysOfOutput.shift();
        let fifthSection = keysOfOutput.shift();
        let sixthSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
                for (let third = sec; third <= sec; third++) {
                    tempObj[thirdSection] = output[thirdSection][third].textContent;
                    for (let fourth = third; fourth <= third; fourth++) {
                        tempObj[fourthSection] = output[fourthSection][fourth].textContent;
                        for (let five = fourth; five <= fourth; five++) {
                            tempObj[fifthSection] = output[fifthSection][five].textContent
                            for (let six = five; six <= five; six++) {
                                tempObj[sixthSection] = output[sixthSection][six].textContent;
                            }
                            result.push(tempObj);
                        }
                    }
                }
            }
        }
    } else if (keysOfOutput.length == 7) {

        let firstSection = keysOfOutput.shift();
        let secSection = keysOfOutput.shift();
        let thirdSection = keysOfOutput.shift();
        let fourthSection = keysOfOutput.shift();
        let fifthSection = keysOfOutput.shift();
        let sixthSection = keysOfOutput.shift();
        let seventSection = keysOfOutput.shift();

        for (let first = 0; first < output[firstSection].length; first++) {
            let tempObj = {};
            tempObj[firstSection] = output[firstSection][first].textContent;
            for (let sec = first; sec <= first; sec++) {
                tempObj[secSection] = output[secSection][sec].textContent;
                for (let third = sec; third <= sec; third++) {
                    tempObj[thirdSection] = output[thirdSection][third].textContent;
                    for (let fourth = third; fourth <= third; fourth++) {
                        tempObj[fourthSection] = output[fourthSection][fourth].textContent;
                        for (let five = fourth; five <= fourth; five++) {
                            tempObj[fifthSection] = output[fifthSection][five].textContent
                            for (let six = five; six <= five; six++) {
                                tempObj[sixthSection] = output[sixthSection][six].textContent;
                                for (let seven = six; seven <= six; seven++) {
                                    tempObj[seventSection] = output[seventSection][seven].textContent;
                                }
                                result.push(tempObj);
                            }
                        }
                    }
                }
            }
        }
    }
    outputElement.textContent = JSON.stringify(result);
    

}