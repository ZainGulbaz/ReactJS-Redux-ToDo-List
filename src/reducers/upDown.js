
const initialState=[];

const upDown = (state=initialState ,action) => {
   
  switch(action.type)
  {
 case "ADD_TO_LIST":
   const {data} = action.payload;
   
   
   
   initialState.unshift(data);
   return{
       initialState
  } 
  case "DLELETE_ELEMENT": 
  const {i}= action.payload;
  initialState.splice(i,1);
  return{
    initialState
  }





   default: return {};

  }
}

export default upDown;
