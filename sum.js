let minus1 = 1;
let minus2 = 1;

let sum = 2
let temp = minus1;

let factorial = 1;

for (let i = 2; i < 1000; i++) {


  temp = minus1;

  minus1 = minus1 + (i-1)*minus2;

  minus2 = temp;

  factorial = factorial*i;

  sum = sum + (minus1/factorial)


  console.log(sum)

};
