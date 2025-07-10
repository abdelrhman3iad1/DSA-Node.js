let arr = [1,3,5,8,30,55];
let arr2 = [3,6,10,22,35];
let mergeAndSortTwoArrays = (arr1,arr2) => {
  let concatedArr = arr1.concat(arr2);
  let temp = null;
  for(let i = 0 ; i <concatedArr.length;i++){
    for(let j = i+1 ; j <concatedArr.length;j++){
      if(concatedArr[j] < concatedArr[i]){
        temp = concatedArr[i];
        concatedArr[i]=concatedArr[j];
        concatedArr[j] = temp;
      }
    }
  }
  return concatedArr;  
}

console.log(mergeAndSortTwoArrays(arr,arr2));