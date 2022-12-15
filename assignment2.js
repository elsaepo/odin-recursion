function mergeSort(arr){
    // Base case - if the array has only a single item in it, it is already sorted
    if (arr.length <= 1){
        return arr;
    }

    // Recursive case - split the unsorted array into 2 arrays, and run each half through mergeSort
    // This will recursively break down the two arrays until they are single elements
    // These single elements will be sorted below, which will return a sorted array of a greater length - which will be sorted below
    let left = mergeSort(arr.splice(0, Math.floor(arr.length/2)));
    let right = mergeSort(arr);

    // Take the first element from the left and right arrays and compare them
    // Splice & push the smaller (or only, in the case of comparing against an empty array) to the new array, until both existing arrays are empty
    let sortedArray = [];
    while (left.length > 0 || right.length > 0){
        if (left[0] < right[0] || !right[0]){
            sortedArray.push(left.splice(0,1)[0]);
        } else {
            sortedArray.push(right.splice(0,1)[0]);
        }
    }

    // Return the now sorted array
    return sortedArray;
}

let array1 = [4, 8, 6, 2, 1, 7, 5, 3];
let array2 = [6, 1, 76, 79, 47, 67, 48, 29, 31, 54, 16, 41, 26, 66, 37, 11, 7, 60, 15, 89, 35, 92, 51, 100, 62]
console.log(array1);
console.log(mergeSort(array1));
console.log(array2);
console.log(mergeSort(array2));