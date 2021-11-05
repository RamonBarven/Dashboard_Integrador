import React, {Children, Component} from 'react';
import './tarjeta.css'

function Tarjeta(props){
    return(
        <div className='tarjeta'>
              {props.children}  
        </div>
    )
}

export default Tarjeta;