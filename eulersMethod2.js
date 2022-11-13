
//standard equation eulers method

var h = 0.001;
let y = -1000000000;
let xi = 1.73205080757;
var endPoint = 4;

for (let x = xi; x <= endPoint; x = x+h){

  console.log(x,y)

  let slope = (y*y) - (y*(1/x)) - (1/x^2);
  y = y + (slope*h)

};
