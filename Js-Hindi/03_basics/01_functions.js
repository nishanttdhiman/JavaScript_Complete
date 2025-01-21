function add2Num(number1,number2)
{
    let result=number1+number2;
    return result
}
const r=add2Num(3,4)
console.log(r);

function loggedIn(username)
{
    return`${username} just logged in`
}

// console.log(loggedIn("Nishant"));

function calculateCartPrice(val1,...num1)
{
    return num1
}
//console.log(calculateCartPrice(200,300,400));

const user={
    username:"nishant",
    price:999
}
function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and 
    the price is ${anyObject.price}`);
}
handleObject(user)

const newArray=[100,111,222]
function getSecondValue(getArr)
{
    return getArr[1]
}
console.log(getSecondValue(newArray));
