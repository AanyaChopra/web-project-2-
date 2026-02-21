const API_KEY='0133cc5316757ac730cc46ae342334e4';

const city=document.querySelector('#city');
const search=document.querySelector('#search');

search.addEventListener('click', async (e)=> {
    e.preventDefault();
    const cityName=city.value;
    const response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`)
    const weatherData=await response.json()
    console.log(weatherData)
    console.log("City:" , weatherData.name)
    console.log("Temperature:" ,  (weatherData.main.temp - 273.15).toFixed(2) + "°C")
    console.log("Weather:" , weatherData.weather[0].main)
    console.log("Humidity:" , weatherData.main.humidity )
    console.log("Wind Speed:" , weatherData.wind.speed ,"m/s")
    
})