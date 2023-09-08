// function declaration 
// "use strict"
function sum(numOne, numTwo) {
  if (numTwo == 1) {
    return numOne;
  }
  console.log(numOne * sum(numOne, numTwo - 1))
  return numOne * sum(numOne, numTwo - 1);

}
setTimeout(sum, 5000, 2, 4)