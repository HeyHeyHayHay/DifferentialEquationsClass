
let y0 = 2;
let y1 = 4;
let y2 = 6;

console.log(0, 2);
console.log(1, 4);
console.log(2, 6);



for (let i = 3; i < 12; i++) {

  let y3 = y2 + (8*y1) - (12*y0) + (i*(Math.pow(3,i)))

  console.log(i, y3);


  y0 = y1
  y1 = y2
  y2 = y3


};
