/* eslint-disable eol-last */
import './styles.css';

// There are many ways to pick a DOM node; here we get the form itself and the email
// input box, as well as the span element into which we will place the error message.
const form = document.getElementsByTagName('form')[0];
const country = document.getElementById('country');
country.error = document.querySelector('#country + span.error');

if (country.textContent.length < 3) {
    country.error.textContent = 'Enter location'
}

country.addEventListener('input', function (event) {
    if (country.value.length > 2) {
        console.log(country.value)
        country.error.textContent = ''
    }
})
