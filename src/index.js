import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, applyMiddleware,compose} from 'redux'
import rootreducer from './store/reducers/rootreducer';
import {Provider} from  'react-redux'
import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore'
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase'
import fbconfig from './config/fbconfig'

const store  = createStore(rootreducer,
    
    compose(
    
        applyMiddleware(thunk.withExtraArgument({getFirestore,getFirebase})),
        reduxFirestore(fbconfig),
        reactReduxFirebase(fbconfig,{useFirestoreForProfile:true, userProfile:'users',attachAuthIsReady:true})
    )   
    );

    store.firebaseAuthIsReady.then(()=>{

         
        ReactDOM.render(<Provider store ={store}><App /></Provider>, document.getElementById('root'));
        // If you want your app to work offline and load faster, you can change
        // unregister() to register() below. Note this comes with some pitfalls.
       // Learn more about service workers: https://bit.ly/CRA-PWA
       serviceWorker.unregister();

    })




