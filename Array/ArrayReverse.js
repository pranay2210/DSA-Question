//Reverse the array

let reverseArray = (array) =>{
    let temp = [];
    for (let index = array.length -1; index >= 0; index--) {
        const element = array[index];
        temp.push(element);
    }
    return temp;
};
let arr =[1,2,3,4,5,6,7,8,9]
console.log("Orignal Array :",arr);
console.log("Reverse Array :",reverseArray(arr));