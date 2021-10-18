/*

Messi goals function
Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

Note: the input will always be valid.

For example:

5, 10, 2  -->  17v   */

function goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals) {

    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }
    return sum;
  }

  const test1 = goals(4,3,45);
  console.log(test1);



