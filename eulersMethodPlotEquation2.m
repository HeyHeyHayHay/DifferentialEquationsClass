%{
Euler's Method for first order equations

Starting value of x = x
Ending Value of x = endPoint
Change of iteration = h
Initial Value of y = y
n = number of points

Define equation under function

%}

x = 0;
endPoint = 1;
h = 0.001;
y = .5;
n = ((endPoint-x)/h)+1;


X = linspace(x,endPoint,n);
L = length(X);
SX = size(X);
Y = ones(SX);

for i = 1:L
    
    xi = x + h*i;

    yPrime = equation(xi,y);

    y = y + yPrime*h;

    Y(i) = Y(i)*y;

end

Yexact = exactSolution(X);

figure
plot(X,Y,'r',X,Yexact,'g')


function yPrime = equation(x,y)
    
    yPrime = y - x;

end

function Yexact = exactSolution(x)
    
    Yexact = (x+1) + ( (-1/2).*exp(x) );

end



