function myFunction() {
  console.log('Function started at: ' + new Date());
  
  // Your function logic goes here
  
  console.log('Function ended at: ' + new Date());
}

// Call the function and log the duration
const startTime = new Date();
myFunction();
const endTime = new Date();
const duration = endTime - startTime;
console.log('Function duration: ' + duration + 'ms');
