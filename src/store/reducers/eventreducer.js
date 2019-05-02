const initState={

events:[

    {id:'1',title:'Business meeting',content:'Discuss for immerging business in canada'},
    {id:'2',title:'Meet and greet',content:'Find new opportnities'},
    {id:'3',title:'Coffee break',content:'Relax from work and take break'}

]


    
}

const eventreducer = (state=initState,action) =>{

switch(action.type){
 
  case 'CREATE_EVENT':
     console.log('created event',action.event);
     return state;
  case 'CREATE_EVENT_ERROR':
     console.log('Error in creating event',action.err);
     return state;
  default:
        return state;
}

}

export default eventreducer;
