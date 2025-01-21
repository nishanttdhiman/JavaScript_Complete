// 1.Stack(Primitive) -> Copy
// 2.Heap(Non-Primitive) -> Refrence(Actual Value Change)

let user1={
    email:"nishnat@.com",
    upi:"okaxis@.ybl"
}

let user2=user1;

//console.log(user2.email);

user2.email="dhiman@.com";

console.log(user1.email);
console.log(user2.email);

