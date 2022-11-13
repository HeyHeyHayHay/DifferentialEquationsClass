
let xInitial = 1.5;

console.log(xInitial);

let xn = xInitial;

let xn1 = xn

for (let i = 1; i < 15; i++) {

  xn1 = xn - ((xn*xn - 2)/3);

  xn = xn1

  console.log(xn1);

}
