//# -> To iterate over objects for-in loop is used
const myObj={
    rb:"Ruby",
    cpp:"c plus plus",
    js:"Javascript"
}
for (const key in myObj) {
    
    // console.log(myObj[key]);
    // console.log(`${key}:${myObj[key]}`);
    
    }

// for-in loop over arrays
const myArr=["A","B","C"]
for (const key in myArr) {
    console.log(myArr[key]);
    
}