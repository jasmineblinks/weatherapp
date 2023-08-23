const apiKey="f7027645d2bba031b997ec1855c37aa0"
const apiUrl="https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchbox= document.querySelector('.search input')

const searchbtn= document.querySelector('.search button')



async function checkWeather(city){
    const response =await fetch(apiUrl+city +`&appid=${apiKey}` )
    var data =await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + '°C';
    document.querySelector(".humidty").innerHTML= data.main.humidity+'%';
    document.querySelector(".wind").innerHTML= data.wind.speed + "km/hr";
}
searchbtn.addEventListener("click", ()=>{
    checkWeather(searchbox.value)

})
checkWeather()