/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

/*
Pszeudokód

1.) Két array létrehozása és összeadása (Set S1 és S2)
2.) Az array "szeletelése " spit-el.
3.) A megfelelő elemek válogatása, sort-al.
4.) A válogatott elemek összegzése Join-al.

*/

function longest(s1, s2) {

    return [...new Set((s1+s2).split(''))].sort().join('');
  }

  const test1 = longest("xyaabbbccccdefww","xxxxyyyyabklmopq");
  console.log(test1);