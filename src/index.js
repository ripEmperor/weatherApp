import './styles.css';

const form = document.getElementsByTagName('form')[0];
const country = document.getElementById('country');
country.error = document.querySelector('#country + span.error');
const submitBtn = document.querySelector('.submitBtn');
let maxTemp = document.querySelector('.dataItem');
let minTemp = document.querySelector('.dataItem2');;
let temp = document.querySelector('.dataItem3');;
let weatherType = document.querySelector('.dataItem4');;
let city = 'London';
let weatherData = {};

if (country.textContent.length < 3) {
    country.error.textContent = 'Enter location'
}

country.addEventListener('input', function (event) {
    if (country.value.length > 2) {
        country.error.textContent = ''
        city = country.value;
    } else {
        country.error.textContent = 'Enter location'
    }
})

submitBtn.addEventListener('click', async function (event) {
    if (country.value.length > 2) {
        country.error.textContent = 'loading'
        let weather = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=dec43400496f3d7d51419c709786896b`);
        weather = await weather.json();
        weatherData = cleanData(weather);
        country.error.textContent = ''
        displayData(weatherData);
        console.log('test')
    }
})

let cleanData = (json) => {
    return {
       weatherType: json['weather'][0]['main'],
       temp: json['main']['temp'],
       maxTemp: json['main']['temp_max'],
       minTemp: json['main']['temp_min'],
    }
}

let displayData = (data) => {
    console.log(maxTemp)
    maxTemp.textContent = `Max Temp: ${data['maxTemp']}`;
    minTemp.textContent = `Min Temp: ${data['minTemp']}`;
    temp.textContent = `Current Temp: ${data['temp']}`;
    weatherType.textContent = `Weather Type: ${data['weatherType']}`;

}