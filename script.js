// Target elements by their IDs
let my_name = document.getElementById("my_name");
let my_email = document.getElementById("my_email");
let my_message = document.getElementById("my_message");
let contact_form = document.getElementById("contactform");
let email_input = document.getElementById("email");
let name_input = document.getElementById("fullname");
let message_input = document.getElementById("message");

console.log(contact_form);

function createAlert(my_event) {
    // Prevent the default form submission
    my_event.preventDefault();

    // Log the input values to the console
    console.log(email_input.value);
    console.log(name_input.value);
    console.log(message_input.value);

    // Check if elements are found before updating their content
    if (my_email) {
        my_email.innerHTML = "Email: " + email_input.value;
    }
    if (my_name) {
        my_name.innerHTML = "Name: " + name_input.value;
    }
    if (my_message) {
        my_message.innerHTML = "Message: " + message_input.value;
    }
}

// Add event listener to the form
if (contact_form) {
    contact_form.addEventListener("submit", createAlert);
}

// script.js
document.getElementById('getWeather').addEventListener('click', getWeather);

function getWeather() {
    const postalCode = document.getElementById('postalCode').value.trim();
    
    if (!postalCode) {
        alert('Please enter a valid postal code.');
        return;
    }

    const apiKey = '2c3bd33bd75c0a3055a7b77c668f3d16'; // Replace with your OpenWeatherMap API key
    const url = `https://api.openweathermap.org/data/2.5/weather?zip=${postalCode}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Invalid postal code or API error.');
            }
            return response.json();
        })
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            weatherDisplay.innerHTML = `
                <h2>Weather in ${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Weather: ${data.weather[0].description}</p>
                <img src="<http://openweathermap.org/img/wn/${data.weather>[0].icon}@2x.png" alt="${data.weather[0].description}">
            `;
        })
        .catch(error => {
            console.error('Error:', error);
            alert('If you see this message, it seems something went wrong.Have a nice day and rave on. Winke Winke');
        });
}