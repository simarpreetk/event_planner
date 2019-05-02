import authreducer from './authreducer'
import eventreducer from './eventreducer'
import { combineReducers } from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'

const rootreducer = combineReducers({
   
     auth: authreducer,
     event:eventreducer,
     firestore:firestoreReducer,
     firebase:firebaseReducer

});


export default rootreducer