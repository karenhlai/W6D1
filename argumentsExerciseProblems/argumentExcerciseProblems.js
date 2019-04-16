function sum() {
  let args = Array.from(arguments);
  let total = 0;
  args.forEach(num => {
    total += num;
  });
  return total;
}


function sum2(...args){
  let total = 0;
  args.forEach(num => {
  total += num;
  });
  return total;

}


//Bindtime args (bound into return function)
Function.prototype.myBind = function(context, ...args) {
 
  let func = this;

      //call time args (can be changed on each invocation)
  let bound = function(...otherargs) {
    let combinedargs = args.concat(otherargs);
    func.apply(context, combinedargs);
  };

  return bound;
};

// 




function curriedSum(numArgs) {
  let numbers = [];
  let totalSum = 0;
  
    let _curriedSum = function(onearg) {
    numbers.push(onearg);

      if (numbers.length === numArgs) {
        numbers.forEach(num => {
          totalSum += num;
        });
        console.log("here's the total baby")
        return totalSum;
      }

    console.log("Hey, we're inside curried sum and also returning the function again")
    return _curriedSum;   /// nessecary for chaining
  };

  console.log("Hey, we're at line 66!");
  return _curriedSum;
}


Function.prototype.curry = function(numArgs){
  let numbers = [];
  // let func = this;

  let _curryThis = (onearg) =>  {
    numbers.push(onearg);

    if(numbers.length === numArgs) {
      let result = this.apply(null, numbers); //first arg?
      return result;
    }
    return _curryThis;
  };

  return _curryThis;
};





Function.prototype.curry2 = function (numArgs) {
  let numbers = [];
  let func = this;

  let _curryThis = function (onearg) {
    numbers.push(onearg);

    if (numbers.length === numArgs) {
      // let result = func.call(null, ...numbers); //first arg?
      let result = func(...numbers); 
      return result;
    }
    return _curryThis;
  };

  return _curryThis;
};


