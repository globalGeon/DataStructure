function swap(array, index1, index2) {
    var temp = array[index1];
    array[index1] = array[index2];
    array[index2] = temp;
}
function insertionSort(array) {
    var cur, prev, curVal;

    for (cur = 0; cur < array.length; cur++) {
        curVal = array[cur];
        for (prev = cur - 1; prev > -1 && array[prev] > curVal; prev--) {
            array[prev + 1] = array[prev];
        }
        array[prev + 1] = curVal;
    }
    return array;
}
function selectionSort(array) {
    var cur, min, tar;

    for (cur = 0; cur < array.length; cur++) {
        min = cur;

        for (tar = cur + 1; tar < array.length; tar++) {
            if (array[tar] < array[min]) {
                min = tar;
            }
        }
        if (cur != min) {
            swap(array, cur, min);
        }
    }

    return array;
}
function bubbleSort(array) {
    var i, cur;
    for (i = 0; i < array.length; i++) {
        for (cur = 0; cur < array.length - 1 - i; cur++) {
            if (array[cur] > array[cur + 1])
                swap(array, cur, cur + 1);
        }
    }
    return array;
}
function quickSort(array) {
    return _quickSort(array, 0, array.length - 1);
}
function _quickSort(array, left, right) {
    var base;

    if (array.length > 1) {
        base = partition(array, left, right);

        if (left < base - 1) {
            _quickSort(array, left, base - 1);
        }
        if (base < right) {
            _quickSort(array, base, right);
        }
    }
    return array;
}
function partition(array, left, right) {
    var pivot = array[Math.floor((left + right) / 2)];

    while (left <= right) {
        while (pivot > array[left]) {
            left++;
        }
        while (pivot < array[right]) {
            right--;
        }
        if (left <= right) {
            var temp = array[left];
            array[left] = array[right];
            array[right] = temp;
            left++;
            right--;
        }
    }
    return left;
}
function mergeSort(array) {
    if (array.length < 2) {
        return array;
    }

    var mid = Math.floor(array.length / 2);
    var leftArray = array.slice(0, mid);
    var rightArray = array.slice(mid);

    return merge(mergeSort(leftArray), mergeSort(rightArray));
}
function merge(leftArray, rightArray) {
    var sorted = [],
        left = 0,
        right = 0;

    while (left < leftArray.length && right < rightArray.length) {
        if (leftArray[left] < rightArray[right]) {
            sorted.push(leftArray[left++]);
        } else if (rightArray[right] < leftArray[left]) {
            sorted.push(rightArray[right++]);
        }
    }
    var leftRemains = leftArray.slice(left),
        rightRemains = rightArray.slice(right);

    return sorted.concat(leftRemains).concat(rightRemains);
}
function countingSort(array) {
    var countingArray = {},
        sorted = [];

    for (var i = 0; i < array.length; i++) {
        var number = array[i];
        if (!countingArray[number]) {
            countingArray[number] = 1;
        } else if (countingArray[number]) {
            countingArray[number]++;
        }
    }

    for (var number in countingArray) {
        for (var i = 0; i < countingArray[number]; i++) {
            sorted.push(parseInt(number));
        }
    }

    return sorted;
}


insertionSort([3, 7, 2, 5, 1, 4]);
 // [ 1, 2, 3, 4, 5, 7 ]

selectionSort([8, 5, 2, 6, 9, 3, 1, 4, 0, 7]);
 // [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]

bubbleSort([5, 3, 8, 4, 6]);
 // [ 3, 4, 5, 6, 8 ]

quickSort([5, 3, 8, 4, 9, 1, 6, 2, 7]);
 // [1, 2, 3, 4, 5, 6, 7, 8, 9]

mergeSort([6, 5, 3, 1, 8, 7, 2, 4]);
 // [1,    2, 3, 4, 5, 6, 7, 8]

countingSort([5, 7, 5, 2, 1, 1]);
 // [ 1, 1, 2, 5, 5, 7 ]