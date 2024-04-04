//Instructions: Write a program that converts temperature from Fahrenheit to Celsius.

// Function to convert Fahrenheit to Celsius
function fahrenheitToCelsius(fahrenheit: number): number {
  const celsius: number = (fahrenheit - 32) * (5 / 9);
  return celsius;
}
const fahrenheitTemp: number = 28;
// Convert Fahrenheit to Celsius
const celsiusTemp: number = fahrenheitToCelsius(fahrenheitTemp);
console.log(
  `${fahrenheitTemp} Fahrenheit is equal to ${celsiusTemp.toFixed(
    2
  )} degrees Celsius.`
);
