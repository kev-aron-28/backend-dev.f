const swap = (arr, first, second) => {
    const temp = arr[first];
    arr[first] = arr[second];
    arr[second] = temp
}

const quickSortUtil = (arr, lower, upper) => {
    if(upper <= lower) {
        return;
    }

    const pivot = arr[lower];
    const start = lower;
    const stop = upper;

    while(lower < upper) {
        while(arr[lower] <= pivot && lower < upper) {
            lower++;
        }
        while(arr[upper] > pivot && lower <= upper) {
            upper--;
        }
        if(lower < upper) {
            swap(arr, upper, lower);
        }
    }
    swap(arr, upper, start)
    quickSortUtil(arr, start, upper - 1);
    quickSortUtil(arr, upper + 1, stop);
}

const quickSort = (arr) => {
    const size = arr.length;
    quickSortUtil(arr, 0, size - 1);
    return arr
}


module.exports = quickSort