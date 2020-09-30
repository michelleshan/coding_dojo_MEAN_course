// Given an array of sorted numbers and a value (also a number), return whether the array contains that value. Return the index position of the value if it exists and -1 if it does not exist. 
// Do not sequentially iterate through the array. Take advantage of the fact that the array is sorted and use a 'divide and conquer' technique.

function binarySearch(arr,val){
    var found = false;
    var midpoint = Math.floor(arr.length/2)-1;
    if (val > arr[arr.length-1] || val < arr[0]){
        return console.log(-1)
    }
    if (val < arr[midpoint]){
        console.log("Val is less than midpoint")
        for (var i = 0; i < Math.floor(arr.length/2); i++){
            if (arr[i] == val){
                found = true;
                return console.log(i);
            }
        }
    }
    else {
        console.log("Val is greater than midpoint")
        for (var j = arr.length-1; j > Math.floor(arr.length/2); j--){
            if (arr[j] == val){
                found = true;
                return console.log(j);
            }
        }
    }
    if (!found){
        return console.log(-1)
    }
}
// binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 53)

// The Big O time complexity of binary search is O(logN)

// Recursive Function
function binarySearch(arr,val){
    var found = false;
    var midpoint = Math.floor(arr.length/2)-1;
    if (val > arr[arr.length-1] || val < arr[0]){
        return console.log(-1)
    }
    if (val < arr[midpoint]){
        console.log("Val is less than midpoint")
        for (var i = 0; i < Math.floor(arr.length/2); i++){
            if (arr[i] == val){
                found = true;
                return console.log(i);
            }
        }
    }
    else {
        console.log("Val is greater than midpoint")
        for (var j = arr.length-1; j > Math.floor(arr.length/2); j--){
            if (arr[j] == val){
                found = true;
                return console.log(j);
            }
        }
    }
    if (!found){
        return console.log(-1)
    }
}
binarySearch([1, 3, 8, 10, 12, 15, 17, 20, 22, 34, 38, 40, 50, 52, 78, 87, 90, 91, 92, 94], 53)