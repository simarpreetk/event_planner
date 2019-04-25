import React from 'react'

const Eventdetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section Event details">

             <div  className="card z-depth-0">
                
                <div  className="card-content">
                   <span className="card-title"><h5>Event Name- {id}</h5></span>
                   <p>hfiwehfhghgpgo;ogjso;gjs;ojgds;gj;gjpoupowufwnsncsnefj0ew-0weif-0fwe</p>  
                 </div>
             
                <div className="card-action grey lighten-4 grey-text">
                   <div>Posted by SKK</div>
                   <div>2nd September,2 am</div>
                </div>                      


             </div>
      
    </div>
  )
}

export default Eventdetails
