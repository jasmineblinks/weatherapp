const apiKey="f7027645d2bba031b997ec1855c37aa0"
const apiUrl="https://api.openweathermap.org/data/2.5/weather? units=metric&q=bangalore"
async function checkWeather(){
    const response =await fetch(apiUrl +`&appid=${apiKey}` )
    var data =await response.json();
    console.log(data)
    document.querySelector(".city").innerHTML= data.name
}
checkWeather()