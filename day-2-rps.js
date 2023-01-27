const fs = require("fs");

fs.readFile("input-day-2-rps.txt", "utf8", function (err, data) {
  const rawData = data.split("\n");
  let score1 = 0;

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
    score1 += myNum;

    //if answer is the same
    if (elfNum === myNum) {
      score1 += 3;
    }

    //if elf has rock, paper wins...scissors wouldn't add
    if (elfNum === 1 && myNum === 2) {
      score1 += 6;
    }

    //if elf has paper, scissors win...rock wouldn't add
    if (elfNum === 2 && myNum === 3) {
      score1 += 6;
    }

    //if elf has scissors, rock wins...paper wouldn't add
    if (elfNum === 3 && myNum === 1) {
      score1 += 6;
    }
  }
  console.log(score1);

  //PART 2

  let score2 = 0;
  for (let i = 0; i < rawData.length; i++) {
    let elfNum = findNum(rawData[i][0]);

    const winMap = { 1: 2, 2: 3, 3: 1 };
    const loseMap = { 1: 3, 2: 1, 3: 2 };

    if (rawData[i][2] === "X") {
      myNum = loseMap[elfNum];
    }

    if (rawData[i][2] === "Y") {
      myNum = elfNum;
    }

    if (rawData[i][2] === "Z") {
      myNum = winMap[elfNum];
    }

    score2 += myNum;

    if (elfNum === myNum) {
      score2 += 3;
    }

    if (elfNum === 1 && myNum === 2) {
      score2 += 6;
    }

    if (elfNum === 2 && myNum === 3) {
      score2 += 6;
    }

    if (elfNum === 3 && myNum === 1) {
      score2 += 6;
    }
  }
  console.log(score2);
});
