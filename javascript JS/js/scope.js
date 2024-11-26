// var a=10;
// function myFun()
// {
//     const b=178;
//     console.log(b);
//     {
//     let a=2;
//     }
// }
// myFun();
// console.log(a);



// console.log(`global:${a}`);
// console.log(`global:("a")`);


// var a=1;
// let b=2;
// const c=3;

// console.log(`global:${a}`);
// console.log(`global:${b}`);
// console.log(`global:${c}`);

// function myFun()
// {
//     const c=4;
//     console.log(`function:${a}`);
//     console.log(`function:${b}`);
//     console.log(`function:${c}`);
// }
// myFun();

//     if(true)
//     {
//         let b=10;
//         console.log(`block:${a}`);
//         console.log(`block:${b}`);
//         console.log(`block:${c}`);
        
//     }




// var a=1;
// let b=2;
// const c=3;

// console.log(`global:${a}`);
// console.log(`global:${b}`);
// console.log(`global:${c}`);

// function myFun()
// {
//     const c=4;
//     console.log(`function:${a}`);
//     console.log(`function:${b}`);
//     console.log(`function:${c}`);


//     if(true)
//     {
//         let b=10;
//         console.log(`block:${a}`);
//         console.log(`block:${b}`);
//         console.log(`block:${c}`);
        
//     }

// }
// myFun();



// var a=1;
// let b=2;
// const c=3;

// console.log(`global:${a}`);
// console.log(`global:${b}`);
// console.log(`global:${c}`);

// function myFun()
// {
//     const c=4;
    
//     if(true)
//     {
//         let b=10;
//         console.log(`block:${a}`);
//         console.log(`block:${b}`);
//         console.log(`block:${c}`);
        
//     }

//     console.log(`function:${a}`);
//     console.log(`function:${b}`);
//     console.log(`function:${c}`);

// }
// myFun();
// console.log(c);




// var a=1;
// let b=2;
// const c=3;

// console.log(`global:${a}`);
// console.log(`global:${b}`);
// console.log(`global:${c}`);

// function myFun()
// {
//     var c=4;
    
//     if(true)
//     {
//         var b=10;
//         console.log(`block:${a}`);
//         console.log(`block:${b}`);
//         console.log(`block:${c}`);
        
//     }

//     console.log(`function:${a}`);
//     console.log(`function:${b}`);
//     console.log(`function:${c}`);

// }
// myFun();
// console.log(c);



function example() {
    var x = 1; 
    console.log(x); // Function-scoped variable
    if (true) {
        var x = 2; // Same variable as above, overwritten
        console.log(x); // Outputs: 2
    }
    console.log(x); // Outputs: 2, because `x` was overwritten in the if block
}

example();
