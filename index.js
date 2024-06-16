const heading = document.getElementById("heading")
const longitudeInput = document.getElementById("longitudeInput")
const latitudeInput = document.getElementById("latitudeInput")
const SubmitInputBtn = document.getElementById("inputBtn")
const latitude = document.getElementById("latitude")
const longitude = document.getElementById("longitude")
const temprature = document.getElementById("temprature")
const windSpeed = document.getElementById("windSpeed")
const rain = document.getElementById("rain")
const dayAurNight = document.getElementById("dayAurNight")

// let temp = ""
// let time = ""
// let windspeed = ""



const getWeatherData = async function (latitude,longitude) {

    let weatherData = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,is_day,rain,wind_speed_10m&hourly=temperature_2m`)
    let response = await weatherData.json();
    // console.log(response, "responsed")
    // time = response.current.time
    // temp = response.current.temperature_2m
    // windspeed = response.current.wind_speed_10m
    return response;

    // console printer
    // console.log(time)
    // console.log(temp)
    // console.log(windspeed)

    // arry calling for  making new async function render()
    // return [time, temp, windspeed]

    // .then((response) => response.json())
    // .then((json) => console.log(json))
}

async function render() {
    let response = await getWeatherData(latitudeInput.value,longitudeInput.value)
    console.log(response.latitude,response.longitude,response.current.temperature_2m)
    latitude.innerText = `Latitude : ${response.latitude}`
    longitude.innerText = `Longitude :${response.longitude}`
    temprature.innerText = response.current.temperature_2m
    windSpeed.innerText = response.current.wind_speed_10m
    rain.innerText = response.current.rain
    dayAurNight.innerText = response.current.is_day
}
render();

SubmitInputBtn.addEventListener('click' , render)
