//for of 
//["","",""]
//[{},{},{}]

const arr=[1,2,3,4,5]

//1. For-of loop
for (const numm of arr) {
    // console.log(numm);
    
}

const greeting='Hello World'
for (const greet of greeting) {
    //console.log(`Character = ${greet}`);
    
}

// 2. Maps
const map=new Map()
map.set('IN',"INDIA")
map.set('JP',"JAPAN")
// console.log(map);
for (const [kwy,value] of map) {
    console.log(kwy,'->',value);
}

//# -> WE cannot Iterate over object with for-of loop
