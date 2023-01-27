const fs = require("fs");

fs.readFile("input-day-3-rucksack.txt", "utf-8", function (err, data) {
  const dataArray = data.split("\n");
  const priority = (type) => {
    const allTypes = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    const typeIndex = allTypes.indexOf(type);
    return typeIndex + 1;
  };

  let priorityNum = 0;

  dataArray.forEach((item) => {
    const middleIndex = item.length / 2;
    const foundArray = [];

    const firstHalf = item.slice(0, middleIndex);
    const secondHalf = item.slice(middleIndex, item.length + 1);

    for (let i = 0; i < firstHalf.length; i++) {
      if (secondHalf.includes(firstHalf[i])) {
        if (!foundArray.includes(firstHalf[i])) {
          priorityNum += priority(firstHalf[i]);
          foundArray.push(firstHalf[i]);
        }
      }
    }
  });
  console.log(priorityNum);
});
