const myNums=[1,2,3]
const myTotal=myNums.reduce(function(acc,currVal){
    console.log(`accumulator:${acc} and Current Value:${currVal}`);
    
    return acc+currVal;
},3)
console.log(myTotal);

const shoopingCart=[
    {
        courseName:"Js Course",
        price:2999
    },
    {
        courseName:"Python Course",
        price:4999
    },
    {
        courseName:"DSA Course",
        price:6999
    },
    {
        courseName:"Data Science Course",
        price:12999
    }
]

const priceToPay=shoopingCart.reduce((acc,item) =>
item.price+acc,0)
console.log(priceToPay);
