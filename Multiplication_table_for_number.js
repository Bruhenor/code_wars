function multiTable(number) {
  let result;

  for (let i = 0; i <= 10; i++) {
    result += "${i} * ${number} = $(i * number)";
    if (i < 10) {
      result += "\n";
    }
  }

  return result;
}

const res = multiTable(4);

console.log(res);
