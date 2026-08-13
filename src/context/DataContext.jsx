import React, { createContext } from 'react'
import { useContext, useState } from 'react'
import axios from 'axios'

export const GeoDataContext = createContext()

export const GeoData = (props) => {

  const [location, setLocation] = useState()

  const [temp, setTemp] = useState(0)
  const [speed, setSpeed] = useState(0)
  const [humid, setHumid] = useState(0)
  const [here, setHere] = useState()

  const weatherData = async(lati,long, place) => {

    const response2 = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lati}&longitude=${long}&current=temperature_2m,relative_humidity_2m,wind_speed_10m`)
    const data2 = await response2.json()
    
    setTemp(data2.current.temperature_2m)
    setSpeed(data2.current.wind_speed_10m)
    setHumid(data2.current.relative_humidity_2m)
    setHere(place)
    
  }

  const geoData = async (locate) => {
    const response = await axios.get(
        `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(locate)}&format=json&limit=1`,
        {
            headers: {
                'User-Agent': 'WeatherApp/1.0'
        }}); 

    const lati = await response.data[0].lat;
    const long = await response.data[0].lon;
    const place = await response.data[0].display_name;
  
    weatherData(lati,long, place)

  }

  const updateLocation = (val) => {
    setLocation(val)
    geoData(val)
  }

  const contextValues = {temp, speed, humid, here, location, updateLocation}


  return (
    <div>
      <GeoDataContext.Provider value={contextValues}>
        {props.children}
      </GeoDataContext.Provider>
    </div>
  )
}

export default GeoData