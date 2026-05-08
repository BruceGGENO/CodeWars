function maxAndMin(arr1,arr2){
    let maxDifference=Math.abs(arr2[0]-arr1[0]);
    let minDifference=Math.abs(arr1[0]-arr2[0]);;
    for(let i=0;i<arr1.length;i++){
        for(let j=0;j<arr2.length;j++){
            if(maxDifference < Math.abs(arr2[j]-arr1[i])) maxDifference=Math.abs(arr2[j]-arr1[i]);
            if(minDifference > Math.abs(arr2[j]-arr1[i])) minDifference=Math.abs(arr2[j]-arr1[i]);

        }
    }
    return [maxDifference,minDifference]
}
console.log(maxAndMin([3,10,5],[20,7,15,8]))