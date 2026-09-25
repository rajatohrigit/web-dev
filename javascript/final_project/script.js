//! Internationalization API (Intl API)
/* Intl is a built-in JavaScript object used for international/language-related tasks.
=> Intl.DisplayNames can convert a country code into the country's full name.
? Ex- IN" → "India","US" → "United States","FR" → "France"
=> convertCountryCode is a function that takes a country code.
=> .of(country) returns the full country name.

* Example- en = English
const displayNames = new Intl.DisplayNames(["en"], {   
  type: "region" //tells that it is in country/region code
});
console.log(displayNames.of("IN")); //takes the country code and returns its name. */

let cityName = document.querySelector(".weather_city");
let dateTime = document.querySelector(".weather_date_time");
let forecast = document.querySelector(".weather_forecast");
let icon = document.querySelector(".weather_icon");
let temp = document.querySelector(".weather_temperature");
let minTemp = document.querySelector(".min_temp");
let maxTemp = document.querySelector(".max_temp");
let feelsLike = document.querySelector(".weather_feelsLike");
let humidity = document.querySelector(".weather_humidity");
let w_wind = document.querySelector(".weather_wind");
let pressure = document.querySelector(".weather_pressure");
let citySearch=document.querySelector(".weather_search");
let city = "pune";

//? To get actual country name by code with intl api 
const getCountryName=(code)=>{
    return new Intl.DisplayNames(["en"], { type: "region" }).of(code);
};

//? To get time dt is in seconds
const getDateTime=(dt)=>{
    let date=new Date(dt*1000); // convert it into milliseconds 
    const timeOptions={
        weekday:"long", // long-> Monday , short → Mon)
        year:"numeric",
        month:"long",
        day:"numeric",
        hour:"numeric",
        minute:"numeric",
    };
    return new Intl.DateTimeFormat("en-US",timeOptions).format(date);
};

//? search functionality
citySearch.addEventListener("submit",(e)=>{
    e.preventDefault();

    let input=document.querySelector(".input");
    city = input.value.trim();
    if (!city) return;
    getWeatherData();
    input.value="";
});





const getWeatherData = async () => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0918f52fba91cd537a6b7a190426ce09&units=metric`;

    try {
        let options={
            headers:{
                "Accept": "application/json"
            } 
        }
        const resp = await fetch(apiUrl,options); //* we can pass directly also
        const data = await resp.json(); //*convert the json string & parse into obj(org)

        console.log(data);
        const {main,dt,sys,wind,weather,name} = data; //* object destructuring

        cityName.textContent=`${name}, ${getCountryName(sys.country)}`;
        //* Defining it inside means a new function is created on every API call.

        dateTime.textContent=getDateTime(dt);
        
        forecast.textContent=weather[0].main;

        icon.innerHTML=`<img src="https://openweathermap.org/img/wn/${weather[0].icon}@2x.png">`; //* This is openweather icon url for accesing icon dynamically

        temp.innerHTML=`${main.temp.toFixed()}&deg;C`; 
        //* html entity symbol used here and innerHtml contains html data

        minTemp.innerHTML=`Min: ${main.temp_min.toFixed()}&deg;C`;
        maxTemp.innerHTML=`Max: ${main.temp_max.toFixed()}&deg;C`;

        feelsLike.innerHTML=`${main.feels_like.toFixed(2)}&deg;C`;
        humidity.innerHTML=`${main.humidity}&percnt;`;
        w_wind.innerHTML=`${wind.speed} m/s`;
        pressure.innerHTML=`${main.pressure} hPa`;

    } catch (error) {
        console.log(error);
    }
}

getWeatherData();
