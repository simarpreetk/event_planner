import authreducer from './authreducer'
import eventreducer from './eventreducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'

const rootreducer = combineReducers({
   
     auth: authreducer,
     event:eventreducer,
     firestore:firestoreReducer
});


export default rootreducer