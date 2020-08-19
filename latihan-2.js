// Convert Fahrenheit to Celcius
function plusWithThirtyTwo(number) {
  return number - 32;
}

function getCelcius(fahrenheit) {
  return plusWithThirtyTwo(fahrenheit) * (5 / 9);
}

console.log(getCelcius(75));
