const fs = require("fs");

fs.readFile("input-day-1-calories.txt", "utf8", function (err, data) {
  let allArray = [];
  let currentArray = "";
  for (let i = 0; i < data.length; i++) {
    if (data[i] === "\n") {
      allArray.push(Number(currentArray));
      currentArray = [];
    } else currentArray += data[i];
  }

  let numTotal = 0;
  const elfArray = [];

  for (let i = 0; i < allArray.length; i++) {
    if (allArray[i] !== 0) {
      numTotal += allArray[i];
    } else {
      elfArray.push(numTotal);
      numTotal = 0;
    }
  }

  let largest = 0;
  let secondLargest = 0;
  let thirdLargest = 0;

  for (let i = 0; i < elfArray.length; i++) {
    if (elfArray[i] > largest) {
      thirdLargest = secondLargest;
      secondLargest = largest;
      largest = elfArray[i];
    } else if (elfArray[i] > secondLargest) {
      thirdLargest = secondLargest;
      secondLargest = elfArray[i];
    } else if (elfArray[i] > thirdLargest) {
      thirdLargest = elfArray[i];
    }
  }
  console.log(largest + secondLargest + thirdLargest);
});
