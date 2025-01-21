const user={
    username:"nishant",
    price:999,

    welcomeMessage:function()
    {
        // console.log(`${this.username},welcome to website`);
        // console.log(this);
        
    }
}
user.welcomeMessage()
//  user.username="sam"
//  user.welcomeMessage()
// console.log(this);


// function chai()
// {
//     let username="histesh"
//     console.log(this.username);
// }
// chai()

// const chai=() =>
// {
//     let username="hitesh"
//     console.log(this.username);
// }
// chai()


// const addtwo=(num1,num2) =>(num1+num2) 
// console.log(addtwo(55,4));

const addtwo=(num1,num2) => ({username:"amman"})
console.log(addtwo(11,12));
