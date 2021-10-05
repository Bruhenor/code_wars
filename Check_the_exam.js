function checkExam(CorrectAnswer, StudentAnswer) {
    let value = 0;
    for (let i = 0; i < CorrectAnswer.length; i++) {
      if (CorrectAnswer[i] === StudentAnswer[i]) {value += 4;}
      else if (StudentAnswer[i]) {
        value -= 1;
      }
    }
    if (value<0) {
      return 0
    }
    return value;}

const res = checkExam(["a", "a", "b", "b"], ["a", "c", "b", "d"]);
const res2 = checkExam(["a", "a", "c", "b"], ["a", "a", "b",  ""]);

console.log(res);
console.log(res2);

