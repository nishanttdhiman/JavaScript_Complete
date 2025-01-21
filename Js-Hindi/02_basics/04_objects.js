const tinderUser=new Object();
//console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="Sammy"
tinderUser.isLoggedin=false

const regularUser={
    email:"abc@Gmail.com",
    fullname:{
        userFullName:{
            firstname:'Nishant',
            lastname:'Dhiman'
        }
    }
}
// console.log(regularUser.fullname.userFullName.lastname);

const obj1={1:"a",2:"b"}
const obj2={3:"c",4:"d"}
// const obj3=Object.assign(obj1,obj2)

const obj3={...obj1,...obj2} /*-> Spread Operator Very Important 
to print Array and Object in a single line*/
// console.log(obj3);

const users=[
    {
        id:1,
        email:"n@gmmail"
    },
    {
    }
]
users[1].email;
//console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.hasOwn('isLoggedin'));


/******** Object Destructoring and Json ***** API */
const course={
    courseName:"js in hindi",
    coursePrice:999,
    courseInstructor:"hitesh"
}

const {courseInstructor:Instt}=course;
console.log(Instt);
