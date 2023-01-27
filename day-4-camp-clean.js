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
});
