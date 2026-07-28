const inputVal = document.getElementById("location")
const inputBtn = document.getElementById("submit-btn")
const screen = document.getElementById("screen")
const h1 = document.getElementById("temp")
const h2 = document.getElementById("place")
const humid = document.getElementById("humid")
const windSpeed = document.getElementById("wind-speed")
const dates = document.getElementById("dates")


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'];
const now = new Date()
const day = days[now.getDay()]
const date = now.getDate()
const month = months[now.getMonth()]
const year = now.getFullYear()
const today = `${day}, ${month} ${date}`


let value = "Kolkata"

async function getCoordinates(location) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`,
        {
            headers: {
                'User-Agent': 'WeatherApp/1.0'
            }
        }
    ); 
    const data = await response.json();
    const lati = await data[0].lat
    const longi = await data[0].lon
    // console.log(`Latitude = ${lati} and Longitude = ${longi}`)
    getWeather(lati, longi)
    
}

async function getWeather(lat, lon){
    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data2 = await response2.json()
    console.log(data2)
    h1.textContent = `${data2.current.temperature_2m} °C`
    h2.textContent = `${value}`
    humid.textContent = `${data2.current.relative_humidity_2m}% Humidity`
    windSpeed.textContent = `${data2.current.wind_speed_10m}km/hr Wind`
    dates.textContent = `${today}`
    
}

function submit(){
    
    value = inputVal.value
    console.log(value)
    getCoordinates(`${value}`)
    inputVal.value = ""
    
}

getCoordinates(value)





