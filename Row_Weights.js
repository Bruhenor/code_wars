/*
Scenario
Several people are standing in a row divided into two teams.
The first person goes into team 1, the second goes into team 2, the third goes into team 1, and so on.

Task
Given an array of positive integers (the weights of the people), return a new array/tuple of two integers, where the first one is the total weight of team 1, and the second one is the total weight of team 2.

Notes
Array size is at least 1.
All numbers will be positive.
Input >> Output Examples
rowWeights([13, 27, 49])  ==>  return (62, 27)*/

/*

Pszeudokód

1.) Eredeti array létrehozása
2.) For loop használatával az eredetei array elemeinek szétválasztása páros és páratlan tagokra (array.push)
3.) A az újjonan keletkezett arrayEven és arrayOdd tagjait külön külön összegezzük.
4.) A két array végeeredményét console.log-gal megjelenítjük

*/

function rowWeights(array) {
  let team1 = 0;
  let team2 = 0;
  let answer = [];

  for (let i = 0; i < array.length; i++) {
    //loop használata az array-en.
    if (i % 2 === 0) {
      //if, pozitiv -> adja a team1-hez
      team1 += array[i];
    } else {
      //else, pozitiv -> adja a team1-hez
      team2 += array[i];
    }
  }
  answer.push(team1, team2); //push both totals to answer array
  return answer;
}
