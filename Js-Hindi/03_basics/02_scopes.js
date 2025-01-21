let a=300
let c=100;
if(true)
{
    let a=10;
    const b=20
    c=30;
}
//console.log(c);


function one()
{
    const username="Nishant"

    function two()
    {
        const website="youtube"
      //  console.log(username);
        
    }
    //console.log(website);
    two();
}
one();

/**************** Intersting ******************/
console.log(addone(5))
function addone(num)
{
    return num+1;
}

console.log(addtwo(8))
const addtwo=function(num)
{
    return num+2;
}
