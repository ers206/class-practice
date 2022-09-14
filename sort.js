// const Benchmark = require('benchmark');
// const { bubbleSort } = require('./sort');

// const numbers = [];
// for (let i = 0; i < 10000; i++) {
//   numbers.push(Math.floor(Math.random() * 10000) + 1);
// }

// const suite = new Benchmark.Suite;

// suite
//   .add('bubble sort', function() {
//     const testArray = [...numbers];
//     bubbleSort(testArray);
//   })
//   .on('complete', function() {
//     this.forEach(result => console.log(`${result.name} averaged ${result.stats.mean*1000} milliseconds.`));
//   })
//   .run(); 

const bubbleSort = (arr) => {
    let sorted = false;
  
    while (!sorted) {
      sorted = true;
  
      for (let i = 0; i < arr.length - 1; i++) {
        // compare current element to next
        if (arr[i] > arr[i+1]) {
          // swap using a third temp variable
          let temp = arr[i];
          arr[i] = arr[i+1];
          arr[i+1] = temp;
  
          // flag as not sorted to run loop again
          sorted = false;
        }
      }
    }
  
    return arr;
  };

  module.exports = { bubbleSort };


  const quickSort = (arr) => {
    // use first index as the pivot point
    const pivot = arr[0];
    const left = [];
    const right = [];
  
    // start at index 1 to ignore pivot
    for (let i = 1; i < arr.length; i++) {
      // push into different arrays based on value compared to pivot
      if (arr[i] <= pivot) {
        left.push(arr[i]);
      }
      else {
        right.push(arr[i]);
      }
    }
  
    // merge arrays and pivot together
    return left.concat(pivot, right);
  };
  
  // export along with bubble sort
  module.exports = { bubbleSort, quickSort };