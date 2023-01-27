const fs = require("fs");

fs.readFile("input-day-2-rps.txt", "utf8", function (err, data) {
  const rawData = data.split("\n");
  let score = 0;

  const findNum = (value) => {
    if (value === "X" || value === "A") {
      return 1;
    }
    if (value === "Y" || value === "B") {
      return 2;
    }
    if (value === "Z" || value === "C") {
      return 3;
    }
  };

  for (let i = 0; i < rawData.length; i++) {
    let elfNum = findNum(rawData[i][0]);
    let myNum = findNum(rawData[i][2]);
    score += myNum;

    //if answer is the same
    if (elfNum === myNum) {
      score += 3;
    }

    //if elf has rock, paper wins...scissors wouldn't add
    if (elfNum === 1 && myNum === 2) {
      score += 6;
    }

    //if elf has paper, scissors win...rock wouldn't add
    if (elfNum === 2 && myNum === 3) {
      score += 6;
    }

    //if elf has scissors, rock wins...paper wouldn't add
    if (elfNum === 3 && myNum === 1) {
      score += 6;
    }
  }
  console.log(score);
});
