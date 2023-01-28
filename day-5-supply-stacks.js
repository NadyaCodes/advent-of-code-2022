const fs = require("fs");

fs.readFile("input-day-5-supplies.txt", "utf-8", function (err, data) {
  const allDataArray = data.split("\n");
  const dataMap = allDataArray.slice(0, 9);
  const directionsMap = allDataArray.slice(10);
  directionsMap.pop();

  let lineData = [];

  //CREATE CRATE OBJECT
  let crateObj = {};

  for (let i = 0; i < dataMap.length; i++) {
    lineData.push(dataMap[i].split(""));
  }

  lineData.reverse();
  const columnIndexes = [];

  for (let k = 0; k < lineData[0].length; k++) {
    let index = Number(lineData[0][k]);
    if (index > 0) {
      columnIndexes.push(k);
    }
  }

  for (let j = 0; j < columnIndexes.length; j++) {
    let crateArray = [];

    for (let m = 1; m <= lineData.length; m++) {
      if (lineData[m] && lineData[m][columnIndexes[j]] !== " ") {
        crateArray.push(lineData[m][columnIndexes[j]]);
      }
    }

    crateObj[j + 1] = crateArray;
    crateArray = [];
  }

  //MANIPULATE CRATE OBJECT
  for (let n = 0; n < directionsMap.length; n++) {
    let splitArray = directionsMap[n].split(" ");
    let numOfBoxes = Number(splitArray[1]);
    let startingColumm = splitArray[3];
    let endingColumn = splitArray[5];

    for (let i = 0; i < numOfBoxes; i++) {
      crateObj[endingColumn] = [
        ...crateObj[endingColumn],
        crateObj[startingColumm][crateObj[startingColumm].length - 1],
      ];
      crateObj[startingColumm].pop();
    }
  }

  let finalString = "";
  for (let i = 1; i <= 9; i++) {
    finalString += crateObj[i][crateObj[i].length - 1];
  }
  console.log(finalString);
});
