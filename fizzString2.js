fizzString2
function fizzString2(n){
    if(n%5==0&&n%3==0)return "FizzBuzz!";
    else if(n%5==0&&n%3!=0) return "Buzz!";
    else if(n%5!=0&& n%3==0) return "Fizz!";
    else return n+"!";
}