import React from 'react'

const Eventsummary = ({event}) => {

return(
    

      
      <div className="event list">
            <div  className="card z-depth-0 event-summary">
                <div className="card-content grey-text text-darken-3">
                    <span className="card-title"><h5>{event.title}</h5></span>
                    <p>Posted by the SKK</p>
                    <p className="grey-text">3rd September, 2 am</p>
                </div>
            </div>
         </div>

    )

}

export default Eventsummary