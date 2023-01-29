const fs = require("fs");

fs.readFile("input-day-6-tuning.txt", "utf-8", function (err, data) {
  const streamArray = data.split("");
  let tempArray = [streamArray[0], streamArray[1], streamArray[2]];

  const noDoubles = (arr) => {
    let compareArray = [];
    let doubles = false;
    arr.forEach((a) => {
      if (!compareArray.includes(a)) {
        compareArray.push(a);
      }
    });
    compareArray.length === arr.length ? (doubles = false) : (doubles = true);
    return doubles;
  };

  for (let i = 3; i < streamArray.length; i++) {
    let markerIndex = i;
    tempArray.push(streamArray[i]);
    if (!noDoubles(tempArray)) {
      console.log(markerIndex + 1);
      return markerIndex + 1;
    }
    let newTempArray = tempArray.slice(1);
    tempArray = [...newTempArray];
  }
});
