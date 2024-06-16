let temp = ""
let time = ""
let windspeed = ""



const getWeatherData = async function () {
    console.log('code working');

    let weatherData = await fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current=temperature_2m,wind_speed_10m")
    let response = await weatherData.json();
    console.log(response, "responsed")
    time = response.current.time
    temp = response.current.temperature_2m
    windspeed = response.current.wind_speed_10m
    console.log(time)
    console.log(temp)
    console.log(windspeed)
    return [time, temp, windspeed]
    // .then((response) => response.json())
    // .then((json) => console.log(json))
}

async function render (){
    let dataArry = await getWeatherData()
    console.log(dataArry)
}


 render();
