
export const addToList=(data)=>
{
  return {
   
     type:"ADD_TO_LIST",
     payload:{
       data:data,
       
     }

  }

}

export const deleteElement=(i)=>
{
return{
  type:"DLELETE_ELEMENT",
  payload:{
    i:i,
  }
}
}

