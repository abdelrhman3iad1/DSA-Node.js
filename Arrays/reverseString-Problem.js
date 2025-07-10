let str = "Hi My Name Is Abdelrhman";

let reverseString = str => {
    let arrOfString = str.split('');
    let reversedArr = [];
    for(let i = arrOfString.length ; i >= 0 ; i--){
        reversedArr.push(arrOfString[i]);
    }
    return reversedArr.join('');
}

console.log(reverseString(str));