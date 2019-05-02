import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createevent} from '../../store/actions/eventactions'
import {Redirect} from 'react-router-dom'


class Createevent extends Component {
  state={
   
    title: '',
    content: ''
          

  }

  handleChange = (e) =>{

    
    this.setState({

         [e.target.id]:e.target.value
       
    })
  }


  handleSubmit = (e) =>{

    e.preventDefault();
    //console.log(this.state);
    this.props.createevent(this.state)
    this.props.history.push('/');
  }
  
  render() {
    const{auth} = this.props;
    if (!auth.uid) {
     
      return (<Redirect to = '/signin' />)
    }
    return (
      <div>
         <div className="container">
          <form onSubmit={this.handleSubmit} className="white">

            <h5 className="grey-text text-darken-3">Create new event</h5>
                        
                         <br/>
                        <div className="input-field">
                         <label htmlFor="title">Event Title</label>
                         <input type="text" id="title" onChange={this.handleChange}/>
                        </div>
                        
                        <div className="input-field">
                         <label htmlFor="content">Event Description</label>
                         <textarea  id="content"  classname="materialize-textarea" onChange={this.handleChange}></textarea>
                        </div>

                        <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">Create Event</button>
                        </div>

          </form>
         
         
         </div>
      </div>
    )
  }
}

const mapStateToProps= (state)=>{

   return{

    auth:state.firebase.auth
   
  
  }


}


const mapDispatchToProps =(dispatch)=>{
  
  return{

    createevent:(event)=> dispatch(createevent(event))  
  
  }

}

export default connect(mapStateToProps,mapDispatchToProps)(Createevent)

