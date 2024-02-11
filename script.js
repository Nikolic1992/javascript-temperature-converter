function convertTemperatures(temperatures) {
  if (temperatures.length === 0) {
    alert("You did not enter any value!");
    return;
  }
  let convertTemperatures = []; // Declared an empty array as the default value
  for (const input of temperatures) {
    let fahrenheitTemperature = input * (9 / 5) + 32; // Using the formula for converting Celsius to Fahrenheit
    convertTemperatures.push(fahrenheitTemperature); // Adding the converted input to the array
  }
  return convertTemperatures;
}

// Example usage:
console.log(convertTemperatures([0, 25, 100])); // Expected output: [32, 77, 212]
