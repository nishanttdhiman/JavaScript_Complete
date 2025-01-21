const myArr=[0,1,2,3,4,5]
console.log(myArr[0]);

// Array Methods
//myArr.push(19)

// myArr.unshift(10);
// myArr.shift();

const newArr=myArr.join();
console.log(typeof newArr);

//slice and splice

const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log(myn2);
console.log("C",myArr);

