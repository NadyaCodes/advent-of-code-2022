const fs = require("fs");

const convertNumber = (arr) => {
  return [Number(arr[0]), Number(arr[1])];
};

const isOverlapping = (arr1, arr2) => {
  if (arr1[0] <= arr2[0] && arr1[1] >= arr2[1]) {
    return true;
  }
  if (arr1[0] >= arr2[0] && arr1[1] <= arr2[1]) {
    return true;
  }
  return false;
};

const isPartiallyOverlapping = (arr1, arr2) => {
  const firstArray = [];
  const secondArray = [];
  let overlap = false;

  for (let i = arr1[0]; i <= arr1[1]; i++) {
    firstArray.push(i);
  }

  for (let i = arr2[0]; i <= arr2[1]; i++) {
    secondArray.push(i);
  }

  secondArray.forEach((arrNum) => {
    if (firstArray.includes(arrNum)) {
      overlap = true;
    }
  });
  return overlap;
};

fs.readFile("input-day-4-camp.txt", "utf-8", function (err, data) {
  const campArray = data.split("\n");

  let totalOverlaps = [];

  campArray.forEach((camp) => {
    const pairs = camp.split(",");

    const firstRange = convertNumber(pairs[0].split("-"));
    const secondRange = convertNumber(pairs[1].split("-"));
    if (isOverlapping(firstRange, secondRange)) {
      totalOverlaps.push(camp);
    }
  });

  console.log(totalOverlaps.length);

  //part 2

  const totalPartialOverlaps = [];

  campArray.forEach((camp) => {
    const pairs = camp.split(",");

    const firstRange = convertNumber(pairs[0].split("-"));
    const secondRange = convertNumber(pairs[1].split("-"));
    if (isPartiallyOverlapping(firstRange, secondRange)) {
      totalPartialOverlaps.push(camp);
    }
  });
  console.log(totalPartialOverlaps.length);
});
