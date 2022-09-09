
//standard equation eulers method

let h = 0.1;
let initialValue = .5;
let startPoint = 0;
let endPoint = 1;

console.log(startPoint, initialValue )

let numberOfSteps = ((endPoint-startPoint)/h);

let firstSlope = equation(startPoint, initialValue);
let newY = changeInY(initialValue, h, firstSlope);

console.log(startPoint+h, newY)


for (let i = 2; i < numberOfSteps+1; i++) {

  let x = startPoint+(i*h);

  let newSlope = equation(x, newY);
  newY = changeInY(newY, h, newSlope);


  console.log(x,newY);

};



function equation(x,y){

  slope = (y-x)


  return slope;

};

function changeInY(y, h, slope){

  y = y + h*slope;
  let newY = y;
  return newY;

};
