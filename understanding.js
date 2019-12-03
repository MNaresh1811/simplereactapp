let y = function(){
    console.log("Petit")
  }
  let x=10;
  console.log(typeof variable)
  console.log(variable)
  console.log("x")
  
  function hoist() {
    a = 20;
    var b = 100;
  }
  
  hoist();
  
  console.log(a);
  
  console.log(hoist1);
  
  var hoist1 = 'The variable has been hoisted.';

  //es6

console.log(hoist2); // Output: ReferenceError: hoist is not defined ...
let hoist2 = 'The variable has been hoisted.';

hoisted(); // Output: "This function has been hoisted."

function hoisted() {
    console.log('This function has been hoisted.');
};

expression(); //Output: "TypeError: expression is not a function

//function expressions
var expression = function() {
  console.log('Will this work?');
};

//function declaration and expression

expression(); // Ouput: TypeError: expression is not a function

var expression = function hoisting() {
  console.log('Will this work?');
};

var double = 22;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: number

var double;

function double(num) {
  return (num*2);
}

console.log(typeof double); // Output: function


var JSB = new Petit();
JSB.iQ = 100;
JSB.knowledge = 300;
console.log(JSB); // Output: ReferenceError: Petit is not defined

class Petit {
  constructor(iQ, knowledge) {
    this.iQ = iQ;
    this.knowledge = knowledge;
  }
}