import React from 'react'
import moment from 'moment'

const Eventsummary = ({event}) => {

return(
    

      
      <div className="event list">
            <div  className="card z-depth-0 event-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"><h5>{event.title}</h5></span>
                    <p>Posted by {event.authorFirstName} {event.authorLastName}</p>
                    <p className="grey-text">{moment(event.createdAt.toDate().toString()).calendar()}</p>
                </div>
            </div>
         </div>

    )

}

export default Eventsummary