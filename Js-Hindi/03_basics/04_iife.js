// Immediately Invoked Function Expressions (IIFE)
(function chai()
{
    console.log(`DB Connected`);
    
})();
// chai()

((name) => {
    console.log(`Db Two ${name}`);
    
})('hello')