import React from 'react'

const Info = () => {
  return (
    <div className='about_info grid'>
        <div className='about_box'>
        <i class="uil uil-calendar-alt"></i>

            <h3 className='about_title'>DOB </h3>
            <span className='about_subtitle'>25th May, 1986 
            </span>
        </div>
        <div className='about_box'>
        <i class="uil uil-location-pin-alt"></i>

            <h3 className='about_title'>STATE OF ORIGIN</h3>
            <span className='about_subtitle'>PLATEAU STATE, NIGERIA 
            </span>
        </div>
        <div className='about_box'>
        <i class="uil uil-users-alt"></i>

            <h3 className='about_title'>MARITAL STATUS</h3>
            <span className='about_subtitle'>SINGLE 
            </span>
        </div>
    
    </div>
  )
}

export default Info
