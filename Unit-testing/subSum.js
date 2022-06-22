function subSum(arr, startI, endI) {

    let sum = 0;

    if (!Array.isArray(arr)) {
        return NaN;
    }

    if (startI < 0) {
        startI = 0;
    }

    if (endI > arr.length - 1) {
        endI = arr.length - 1;
    }

    for (let i = startI; i <= endI; i++) {

        let currEl = Number(arr[i]);
        sum += currEl;
    }

    return sum;

}
subSum([10, 20, 30, 40, 50, 60], 3, 300);