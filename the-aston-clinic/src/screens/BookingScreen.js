import React, { useState, useEffect } from 'react'
import axios from 'axios';
import '../Utilities/Publish.css'
import { Button } from '../components/Button/Button';
import Loader from '../components/Loader/Loader'
import Error from '../components/Error/Error';


function BookingScreen({ match }) {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState();
  const [treatments, settreatment] = useState();
  useEffect(async () => {

    try {
      setloading(true)
      const data = (await axios.post('/api/treatments/gettreatmentbyid', { treatmentid: match.params.treatmentsid })).data

      settreatment(data)
      setloading(false)
    } catch (error) {
      setloading(false)
      seterror(true)
    }

  }, [])
  return (
    <div className='m-5'>
      {loading ? (
        <Loader />) : error ? (<Error />) : ( <div>

          <div className='row justify-content-center mt-5 box'>

            <div className='col-md-6'>
                <h1>{treatments.name}</h1>
                <img src={treatments.imageurls[0]} className='bigimg' />
            </div>  

            <div className='col-md-6'>
                <div>
                  <h1>Booking Details</h1>
                  <hr/>
                  <b>
                    <p> Name  </p>
                    <p> Date </p>
                    <p> Time </p>
                    <p> Treatment Name: {treatments.type} {treatments.name}</p>
                  </b>
                </div>

                <div>
                  <h1>Amount</h1>
                  <hr />
                  <b>
                    <p> cost: £{treatments.cost}</p>
                  </b>
                </div>

                <div>
                  <Button>
                    Pay Now
                  </Button>
                </div>
            </div>  

          </div>



          </div> )}

    </div>
  )
}

export default BookingScreen