import { useState } from 'react'
import Section1 from './components/Section1.jsx'


function App() {
  const [location, setLocation] = useState("")
  
  const [temp, setTemp] = useState()
  const [speed, setSpeed] = useState()
  const [humid, setHumid] = useState()
 
  const getWeather = async(lati,long) => {
    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data2 = await response2.json()
    console.log(data2)
  }

  const getCoordinates = async () => {
    const response = await fetch(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`,
        {
            headers: {
                'User-Agent': 'WeatherApp/1.0'
            }
        }
    ); 
    const data = await response.json();
    const lati = await data[0].lat;
    const long = await data[0].lon;
    const loc = await data[0].display_name;
    setLocation("")
    console.log(`${lati}`)
    console.log(`${long}`)
    console.log(`${loc}`)
    
    getWeather(lati,long)
  }

  return (
    <div className='min-h-screen bg-slate-600 text-white'>
     
     <Section1 />

     <div className='h-[20vh] bg-slate-900 flex justify-center items-center gap-10'>

      <input
       type="search" value={location} placeholder="Search City" onChange={(e) => {
        setLocation(e.target.value)
      }} 
      className='bg-slate-400 w-[40%] h-[30%] rounded-xl text-white outline-none px-8 text-2xl' 
      />

      <button onClick={getCoordinates} className='bg-slate-800 px-12 py-6 rounded-full text-2xl text-white tracking-widest cursor-pointer'>Search</button>
     </div>

    </div>
  )
}

export default App
