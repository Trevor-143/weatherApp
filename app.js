let displayImage = document.querySelector('.displayImage');
let condition = document.querySelector('.condition');
let locationName = document.querySelector('.cityName');
let country = document.querySelector('.country');
let cel = document.querySelector('.cel');
let fran = document.querySelector('.fran');
let day_night = document.querySelector('.day_night');
let date = document.querySelector('.date');

const search_text = document.querySelector('.search_text');
const search_button = document.querySelector('.search_button');

const key = 'f7931c6007fb49c986560638233101'


search_button.addEventListener('click', (e) => {
    e.preventDefault()
    dispalyWeather()
});


function dispalyWeather() {
    fetch(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${search_text.value}&aqi=no`)
    .then(response => response.json())
    .then(data => {
        // console.log(data)
        if (data.current.is_day === 1) {
            day_night.innerHTML = `Day`;
        } else {
            day_night.innerHTML = `Night`;
        }
        condition.innerHTML = `${data.current.condition.text} ${day_night.innerHTML}`;
        displayImage.src = data.current.condition.icon;
        country.innerHTML = `<span><i class="fa-solid fa-earth-americas"></i>Country:</span> ${data.location.country}`;
        locationName.innerHTML = `<span><i class="fa-solid fa-location-dot"></i>Location:</span> ${data.location.name}`;
        cel.innerHTML = `<span><i class="fa-solid fa-temperature-quarter"></i>Tempreture in celcius:</span> ${data.current.temp_c}°c`;
        fran.innerHTML = `<span><i class="fa-solid fa-temperature-quarter"></i>Tempreture in fahrenheit:</span> ${data.current.temp_f}°f`;
        date.innerHTML = data.location.localtime;
        
    
    })
}
