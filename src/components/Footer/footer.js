import React from 'react';
import Mobile from './mobile.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'



export default function footer() {
  return (
    <div className='footer'>
        <div>
        <i class="fa fa-mobile" aria-hidden="true"></i>
            <p>Mobile Number</p>
        </div>
    </div>
  )
}
