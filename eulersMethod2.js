
//standard equation eulers method

var h = 0.001;
let y = 0.5;
let xi = 0;
var endPoint = 2.5;

for (let x = xi; x <= endPoint; x = x+h){

  console.log(x,y)

  let slope = (((x-1)*(x-1))-(y*y));
  y = y + (slope*h)

};
