// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = parseInt(this.getAttribute('data-count'));
//   count++;

//   this.setAttribute('data-count', count);
//   this.textContent = `Clicks: ${count}`;
// };

// buttonEl.addEventListener('click', clickHandler);
// ========================= 
// const buttonEl = document.getElementById('my-button');

// const clickHandler = function() {
//   let count = 0;

//   return function() {
//     count++;
//     this.textContent = `Clicks: ${count}`;
//   };
// };
// ========================

// for multiple buttons? didnt work when everything else was commented out 
// buttonEl.addEventListener('click', clickHandler());

// const buttons = document.getElementsByTagName('button');

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener('click', clickHandler());
// }

// ============================ 

// const containerEl = document.getElementById('container');

// const clickHandler = function(event) {
//   if (event.target.matches('button')) {
//     event.target.textContent = 'Clicked!';
//   }
// };

// containerEl.addEventListener('click', clickHandler);

// ======================= 

// bubble sort with nested for loop 

// const bubbleSort = (arr) => {
//     for (let i = 0; i < arr.length - 1; i++) {
//       for (let j = 0; j < arr.length - 1; j++) {
//         // compare arr[j] to arr[j+1]
//         // swap places if needed
//       }
//     }
  
//     return arr;
//   };

//   const bubbleSort = (arr) => {
//     let sorted = false;
  
//     while (!sorted) {
//       sorted = true;
  
//       for (let i = 0; i < arr.length - 1; i++) {
//         // compare arr[i] to arr[i+1]
//         // swap places if needed
//         // if swapped, set sorted = false to run while loop again
//       }
//     }
  
//     return arr;
//   };

//   answer to above 
//   const bubbleSort = (arr) => {
//     let sorted = false;
  
//     while (!sorted) {
//       sorted = true;
  
//       for (let i = 0; i < arr.length - 1; i++) {
//         // compare current element to next
//         if (arr[i] > arr[i+1]) {
//           // swap using a third temp variable
//           let temp = arr[i];
//           arr[i] = arr[i+1];
//           arr[i+1] = temp;
  
//           // flag as not sorted to run loop again
//           sorted = false;
//         }
//       }
//     }
  
//     return arr;
//   };

const { quickSort } = require('./sort'); 
const numbers = [54, 8, 87, 88, 100, 98, 17, 72, 67, 42, 40, 34, 55, 18, 33, 94, 59, 68, 92, 2];

console.log(quickSort(numbers));



const quickSort = (arr) => {
    // don't quick-sort a small array; just return it immediately
    if (arr.length <= 1) {
      return arr;
    }
  
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
  
    // merge the sorted arrays and pivot together
    return quickSort(left).concat(pivot, quickSort(right));
  };