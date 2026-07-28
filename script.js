const inputVal = document.getElementById("location")
const inputBtn = document.getElementById("submit-btn")
const h1 = document.getElementById("temp")
const h2 = document.getElementById("place")

let value = ""

async function getCoordinates(location) {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`,
        {
            headers: {
                'User-Agent': 'MyWeatherApp/1.0' // It's important to identify your app
            }
        }
    );
    
    const data = await response.json();
    const lati = await data[0].lat
    const longi = await data[0].lon
    console.log(`Latitude = ${lati} and Longitude = ${longi}`)
    getWeather(lati, longi)
    
}

async function getWeather(lat, lon){
    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data2 = await response2.json()
    console.log(data2)
    console.log(`temp = ${data2.current.temperature_2m}`)
    h1.textContent = `${data2.current.temperature_2m} °C`
    h2.textContent = `${value}`
}

function submit(){
    
    value = inputVal.value
    console.log(value)
    getCoordinates(`${value}`)
    inputVal.value = ""
}








