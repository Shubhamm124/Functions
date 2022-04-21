console.log("Welcome");


//problem 1 :- Create one function with zero parameter having a console statement
// ===>

function print() {
    console.log("Hi how are you?");
}
print();


//problem 2 :- Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"
// ===>

function add(a,b) {
    let result = a + b;
    console.log(result);
}
add(3,4);


// problem 3 :- Create one arrow function
//===>

let welcome = function (){
    return "This is an arrow function";
}
console.log(welcome());


// problem 4 :-
// "Print output: 
var x = 21;
var girl = function () {
    console.log(x);
    var x = 20;
};
girl ();
//output :- undefined

// problem 5 :-
// "Print output: 
var x = 21;
girl ();
console.log(x)
function girl() {
    console.log(x);
    var x = 20;
};
//Output :- 21

// "Print output

// var x = 21;
// a();
// b();
// console.log(a);
// a = function() {
    
//    x = 20;
//   console.log(x);
// };
// b = function() {
    
//     x = 40;
//    console.log(x);
// };
// Output :- Uncaught ReferenceError

//problem 6 :- Write a function that accepts parameter n and returns factorial of n

let factorial = (n) =>{
    let facto = 1;
    for(let i=2; i<=n; i++){
        if (n==0){
            fact=1;
            break;
        }
        facto *=i;
    }
    console.log("the factorial of the " + n + "is:" + facto);
}
factorial(6);