import { useContext, useEffect } from 'react'
import Section1 from './components/Section1.jsx'
import Section2 from './components/Section2.jsx'
import { GeoDataContext } from './context/DataContext.jsx'



function App() {
  
  const {updateLocation} = useContext(GeoDataContext)

  useEffect(() => {
    updateLocation("London")
  },[])

  return (
    <div className='min-h-screen bg-slate-600 text-white'>
      
      <Section1 />
      
      <Section2 />

    </div>
  )
}

export default App
