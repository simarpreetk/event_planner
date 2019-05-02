export const createevent = (event) =>{

return(dispatch,getState,{getFirebase,getFirestore}) =>{

// make asyn all to database

const firestore = getFirestore(); 
const profile =getState().firebase.profile;
const authorId =getState().firebase.auth.uid;

firestore.collection('evnets').add({
...event,
authorFirstName:profile.firstName,
authorLastName:profile.lastName,
authorId:authorId,
createdAt:new Date()


 }).then(()=>{

    dispatch({type:'CREATE_EVENT',event});
 
}).catch((err)=>{

    dispatch({type:'CREATE_EVENT_ERROR',err});


})


   
    


}};