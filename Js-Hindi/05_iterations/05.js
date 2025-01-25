//# -> For-each loop
const arr=['js','py','cpp']
// arr.forEach( function (val){console.log(val);
// } )

//arr.forEach( (item,index,arr) =>
    // {console.log(item,index,arr);
    //}
//)

const newArr=[
    {
        languageName:'Java',
        langShort:'Jp'
    },
    {
        languageName:'Cpp',
        langShort:'C++'
    }]
newArr.forEach( (i) => {
    console.log(i.languageName);
    
})