import React, { Component } from 'react'
import Eventsummary from './eventsummary'
import {Link} from 'react-router-dom'

const Eventlist =({events}) => {


    return(


    <div className="event list">
           
       {events && events.map(event=>{

            return(
                <Link to ={'/event/'+event.id} key={event.id}>
                <Eventsummary event={event} />
                </Link>
            )
       })}
    
    
    </div>
    
    )
}

export default Eventlist