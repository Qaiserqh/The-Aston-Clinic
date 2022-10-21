import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Publish from '../components/Publish/Publish'
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error'

function Treatments() {


    const[treatments, settreatments] = useState([])
    const [loading, setloading] = useState()
    const [error, seterror] = useState()

    useEffect(async() => {
        try {
          setloading(true)
            const data  = (await axios.get('/api/treatments/getalltreatments')).data

            settreatments(data)
            setloading(false)

        } catch (error) {
            seterror(true)
            console.log(error)
            setloading(false)
        }
    },[])

  return (
    <div className='container'>
      <div className='row justify-content-center mt-5'>
      {loading ? (
      <Loader />) : treatments.length>1 ? (<Error />) : (treatments.map(treatments=>{
        return <div className='com-md-9 mt-2'>
          <Publish treatments={treatments} />
        </div>
      }))}
      </div>
    </div>
  )
}
 export default Treatments