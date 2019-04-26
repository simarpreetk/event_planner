import React, { Component } from 'react'
import Notifications from './notifications'
import Eventlist from '../event/eventlist'
import {connect} from 'react-redux'
import {firestoreConnect}  from 'react-redux-firebase'
import {compose} from 'redux'



class Dashboard extends Component{
  render(){
     //console.log(this.props);
     const{events} = this.props;

     return(

             <div className = "dashboard container"> 
          
                <div className = "row">

                  
                  
                   <div className="col s12 m6">
                   
                        <Eventlist events={events}/>
                   
                   </div> 
                
                  

                   <div className="col s12 m5 offset-m1">
                   
                        <Notifications/>
                   
                   </div> 
                
                </div>
            </div>
     )


  }


}


const mapStateToProps =(state) =>{
   console.log(state);
   return {
      events: state.firestore.ordered.evnets
   }
}

//export default connect(mapStateToProps)(Dashboard)

export default compose(
  
   connect(mapStateToProps),
   firestoreConnect([
      {collection: 'evnets'}
   ])

)(Dashboard)