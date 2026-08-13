import { useContext, useState } from 'react'
import { Search } from 'lucide-react'
import { GeoDataContext } from '../context/DataContext'

export const Section2 = () => {

    const {location, updateLocation} = useContext(GeoDataContext)
    let value = ""

  return (
    <div className='h-[20vh] bg-slate-900 flex justify-center items-center gap-10'>

        <div className='relative flex items-center w-[40%] h-[30%]'>

          <Search size={28} color="#ffffff" strokeWidth={2} className='absolute left-10' />
          <input
          type="search" defaultValue=" " placeholder="Search City"
          onChange={(e) => value = (e.target.value)}
          className='bg-slate-400 w-[100%] h-[100%] rounded-full text-white outline-none px-22 text-3xl font-semibold tracking-wider' 
          />

        </div>

        <button onClick={(e) => updateLocation(value)} className='bg-slate-800 px-12 py-6 rounded-full text-4xl text-white tracking-widest cursor-pointer font-bold '>Search</button>

    </div>
  )
}

export default Section2