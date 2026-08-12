import { useState } from 'react'
import axios from 'axios'
import Section1 from './components/Section1.jsx'
import { Search } from 'lucide-react'


function App() {
  const [location, setLocation] = useState("")
  
  const [temp, setTemp] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [humid, setHumid] = useState(0)
  const [loc, setLoc] = useState()
 
  const getWeather = async(lati,long,loc) => {
    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data2 = await response2.json()
    console.log(data2)

    setTemp(data2.current.temperature_2m)
    setSpeed(data2.current.wind_speed_10m)
    setHumid(data2.current.relative_humidity_2m)
    setLoc(loc)
  }

  const getCoordinates = async () => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(location)}&format=json&limit=1`,
        {
            headers: {
                'User-Agent': 'WeatherApp/1.0'
            }}); 
    
    const lati = await response.data[0].lat;
    const long = await response.data[0].lat;
    const loc = await response.data[0].display_name;   
    setLocation("")
    getWeather(lati,long,loc)
  }

  return (
    <div className='min-h-screen bg-slate-600 text-white'>
     
      <Section1 temp={temp} speed={speed} humid={humid} loc={loc}/>

      <div className='h-[20vh] bg-slate-900 flex justify-center items-center gap-10'>

        <div className='relative flex items-center w-[40%] h-[30%]'>

          <Search size={28} color="#ffffff" strokeWidth={2} className='absolute left-10' />
          <input
          type="search" value={location} placeholder="Search City" onChange={(e) => {
            setLocation(e.target.value)
          }} 
          className='bg-slate-400 w-[100%] h-[100%] rounded-full text-white outline-none px-22 text-3xl font-semibold tracking-wider' 
          />

        </div>
        <button onClick={getCoordinates} className='bg-slate-800 px-12 py-6 rounded-full text-4xl text-white tracking-widest cursor-pointer font-bold '>Search</button>
      </div>

    </div>
  )
}

export default App
