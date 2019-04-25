import React, { Component } from 'react'
import Eventsummary from './eventsummary'

const Eventlist =({events}) => {


    return(


    <div className="event list">
           
       {events && events.map(event=>{

            return(
                <Eventsummary event={event} key={event.id}/>
            )
       })}
    
    
    </div>
    
    )
}

export default Eventlist