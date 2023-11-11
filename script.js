document.getElementById("convertButton").addEventListener("click", function() {
    const inputTemp = parseFloat(document.getElementById("inputTemp").value);
    const inputUnit = document.getElementById("inputUnit").value;
    const resultElement = document.getElementById("result");

    if (inputUnit === "celsius") {
        const fahrenheit = (inputTemp * 9/5) + 32;
        const kelvin = inputTemp + 273.15;
        resultElement.textContent = `${inputTemp}°C is ${fahrenheit.toFixed(2)}°F and ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "fahrenheit") {
        const celsius = (inputTemp - 32) * 5/9;
        const kelvin = (inputTemp - 32) * 5/9 + 273.15;
        resultElement.textContent = `${inputTemp}°F is ${celsius.toFixed(2)}°C and ${kelvin.toFixed(2)}K`;
    } else if (inputUnit === "kelvin") {
        const celsius = inputTemp - 273.15;
        const fahrenheit = (inputTemp - 273.15) * 9/5 + 32;
        resultElement.textContent = `${inputTemp}K is ${celsius.toFixed(2)}°C and ${fahrenheit.toFixed(2)}°F`;
    }
});
