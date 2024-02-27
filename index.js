function receivesAFunction(callback) {
    
    callback();
  }
  function callbackFunction() {
    console.log("This is a callback function!");
  }
  receivesAFunction(callbackFunction);
 // index.js

// Define the function returnsANamedFunction
function returnsANamedFunction() {
    // Define a named function
    function namedFunction() {
      console.log("This is a named function returned by returnsANamedFunction!");
    }
    
 
    return namedFunction;
  }
  

  const returnedFunction = returnsANamedFunction();
 
  returnedFunction();

function returnsAnAnonymousFunction() {

    return function() {
      console.log("This is an anonymous function returned by returnsAnAnonymousFunction!");
    };
  }
  
  
  const anonymousFunction = returnsAnAnonymousFunction();
  
  
  anonymousFunction();
  