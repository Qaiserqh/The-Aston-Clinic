import React from 'react'
import MoonLoader from "react-spinners/MoonLoader";
import { useState } from "react";
import '../../Utilities/Loader.css'

function Loader() {

  let [loading, setLoading] = useState(true);
  let [color, setColor] = useState("#ffffff");



  return (
    <div className='text-center mtop'>
    <div className="sweet-loading flex pos-center">
      <MoonLoader
        color='#C9AE5D'
        loading={loading}
        css=''
        size={80}
      />
    </div>
    </div>
  )
}

export default Loader