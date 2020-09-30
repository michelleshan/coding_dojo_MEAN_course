// Classify each of the following functions according to their Big O Time complexity:

function printArray(arr){
    for (var i=0; i<arr.length; i++){
        console.log(arr[i]);
    }
}
// => O(n)

function findNth(arr,n){
    console.log(arr[n]);
}
// => O(1)

function halving(n){
    var count = 0;
    while (n>1){
        n = n/2;
        count++;
    }
}
// => O(n)

function identityMatrix(n){
    var matrix = [];
    for (var i=0; i<n; i++){
        var row = [];
        for (var j=0; j<n; j++){
            if (j==i){
                row.push(1);
            }
            else{
                row.push(0);
            }
        }
        matrix.push(row);
    }
    return matrix;
}
// => O(n^2)