// Singleton
//object.create

const mySym=Symbol("key 1")
//Object Literal
const JsUser={
    name:"nishant",
    [mySym]:"myKey1",
    email:"ndhiman@gmail.com",
    age:21,
    location:"Ropar",
    isLoggedIn:false,
    lastLoggedDay:["monday","saturday"]
}
// console.log(typeof JsUser.mySym);
// console.log(JsUser.email);
// console.log(JsUser["email"]);

// console.log(JsUser);

JsUser.greeting=function(){
    console.log("Hello Js user");
    
}
console.log(JsUser.greeting());

JsUser.greeting2=function(){
    console.log(`Hello Js user ${this.name}`);
}
console.log(JsUser.greeting2());
