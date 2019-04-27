import React from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'


const Eventdetails = (props) => {
  
  const id = props.match.params.id;
  console.log(props);
  const {event} =props;
  if (event){

    return(
    <div className="container section Event details">

    <div  className="card z-depth-0">
       
       <div  className="card-content">
          <span className="card-title"><h5>{event.title}</h5></span>
          <p>{event.content}</p>  
        </div>
    
       <div className="card-action grey lighten-4 grey-text">
          <div>Posted by {event.authorFirstName} {event.authorLastName}</div>
          <div>2nd September,2 am</div>
       </div>                      


    </div>

</div>
    )
  }else {  
    
    return(
          <div className="container center">
          <p>Loading project...</p>
          </div>
     )
  }
}




const mapStateToProps = (state,ownProps)=>{

 //console.log(state);
 const id = ownProps.match.params.id;
 const events = state.firestore.data.evnets;
 const event = events ? events[id]: null;
 
  return{
     event:event
  
  }
} 


//export default Eventdetails;
export default compose(
connect(mapStateToProps),
firestoreConnect([

{collection:'evnets'}

])
  
)(Eventdetails)
