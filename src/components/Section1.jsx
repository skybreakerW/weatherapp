import { Wind, Droplet, MapPin } from "lucide-react"


const Section1 = (props) => {

  return (
    <div className='h-[80vh] bg-slate-800 flex flex-col justify-center items-center'>

      <h1 className='text-8xl p-8'>{props.temp}°C</h1>
      
        <h3 className="flex flex-row gap-2 items-center text-lg italic p-1">{props.speed} Km/hr
          <Wind />
        </h3>

      <h3 className="flex flex-row gap-2 items-center text-lg italic p-1">{props.humid}% Humid
        <Droplet size={20}/>
      </h3>

      <br />

      <h3 className="flex flex-row gap-2 items-center text-lg font-semibold p-2">
        <MapPin size={24} color="#ffffff" />
        {props.loc}
      </h3>

    </div>
  )
}

export default Section1