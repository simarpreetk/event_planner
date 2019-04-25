import authreducer from './authreducer'
import eventreducer from './eventreducer'
import { combineReducers } from 'redux';

const rootreducer = combineReducers({
   
     auth: authreducer,
     event:eventreducer
})

export default rootreducer