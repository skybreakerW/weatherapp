import { Wind, Droplet, MapPin } from "lucide-react"
import { useContext } from "react"
import { GeoDataContext } from "../context/DataContext"

const Section1 = (props) => {

  const {temp, speed, humid, here, location} = useContext(GeoDataContext)


  return (
    <div className='h-[80vh] bg-slate-800 flex flex-col justify-center items-center'>

      <h1 className='text-8xl p-8'>{temp}°C</h1>
      
        <h3 className="flex flex-row gap-2 items-center text-lg italic p-1">{speed} Km/hr
          <Wind />
        </h3>

      <h3 className="flex flex-row gap-2 items-center text-lg italic p-1">{humid}% Humid
        <Droplet size={20}/>
      </h3>

      <br />

      <h3 className="flex flex-row gap-2 items-center text-lg font-semibold p-2">
        <MapPin size={24} color="#ffffff" />
        {here}
      </h3>

    </div>
  )
}

export default Section1