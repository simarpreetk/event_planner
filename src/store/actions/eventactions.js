export const createevent = (event) =>{

return(dispatch,getState,{getFirebase,getFirestore}) =>{

// make asyn all to database

const firestore = getFirestore();

firestore.collection('evnets').add({
...event,
authorFirstName:'test',
authorLastName:'user',
authorId:05,
createdAt:new Date()


 }).then(()=>{

    dispatch({type:'CREATE_EVENT',event});
 
}).catch((err)=>{

    dispatch({type:'CREATE_EVENT_ERROR',err});


})


   
    


}};