// from module 17=================== 

// function to check if number is even..... technically an algorithm
// % is more efficient than isEven()
const isEven = (num) => {
    if (num % 2 === 0) {
      return true;
    }
    else {
      return false;
    }
  };

//   function without % the forloop would have to repeat over and over for large numbers

  const isEven = (num) => {
    let even = true;
   
    for (let i = 0; i < num; i++) {
      even = !even;
    }
   
    return even;
   };

   //  when given a particular number, console-logs its index in the data array

   const findIndex = (num) => {
    for (let i = 0; i < data.length; i++) {
      if (data[i] === num) {
        console.log(`${num} found at index ${i}`);
      }
    }
  };

// binary search code example 

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num) => {
  let left = 0;
  let right = arr.length - 1;
  let middle = Math.floor((left + right) / 2);

  if (num === arr[middle]) {
    return 'found it';
  }
  else if (num < arr[middle]) {
    right = middle;
    return `bring right down to ${right}`;
  }
  else if (num > arr[middle]) {
    left = middle + 1;
    return `bring left up to ${left}`;
  }
};

console.log(binarySearch(data, 38));

// recursion 

const data = [12, 23, 38, 40, 54, 62, 71, 87, 99];

const binarySearch = (arr, num, left, right) => {
  let middle = Math.floor((left + right) / 2);

  // range overlapped, so never found number
  if (left > right) {
    return -1;
  }
  else if (num === arr[middle]) {
    return middle;
  }
  else if (num < arr[middle]) {
    // call again with a new right value
    return binarySearch(arr, num, left, middle - 1);
  }
  else {
    // call again with a new left value
    return binarySearch(arr, num, middle + 1, right);
  }
};

// set initial left and right values on first call
console.log(binarySearch(data, 12, 0, data.length - 1));