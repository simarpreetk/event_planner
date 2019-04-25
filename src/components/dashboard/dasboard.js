import React, { Component } from 'react'
import Notifications from './notifications'
import Eventlist from '../event/eventlist'
import {connect} from 'react-redux'

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
   return {
      events: state.event.events
   }
}
export default connect(mapStateToProps)(Dashboard)