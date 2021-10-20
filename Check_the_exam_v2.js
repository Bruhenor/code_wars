checkExam = (CorrectAnswer, StudentAnswer) => {
    const value = StudentAnswer.reduce((acc,curr,index) => {
    if(curr === CorrectAnswer[index]) return acc + 4;
    if(curr) return acc -1;
    return 0
  }, 0)
    if (value < 0) {
      return 0;
    }
    return value;
  }