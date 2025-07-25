//Google Question
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined


function firstRecurringCharacter(input) {

    if(!(typeof input === 'object')) return undefined;

    const keys = {};

    
    for (let i =0;i<input.length;i++){
        if(keys[input[i]] === 0) return input[i];
        keys[input[i]] = 0;
    }


    return undefined;
}
let input = [2,1,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));

