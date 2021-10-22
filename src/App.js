
import {React,useState} from 'react';
import "../src/App.css"
import { useSelector,useDispatch } from 'react-redux';
import {addToList,deleteElement} from "./actions/index";

const App = () => {
   const myState= useSelector((store)=>store.upDown);
   const dispatch = useDispatch();
   const [data,setData]= useState("");
   
   return (
     <>

        <div className="Container">
        
        <div className="box1">
           <input type="text"  id="textArea" placeholder="Enter Your Text" onChange={(e)=>setData(e.target.value)} />
           <button className="addBtn" onClick={()=>dispatch(addToList(data))}>+</button>
        </div>
        <div className="box2">
           {(myState.initialState!== undefined)&&  myState.initialState.map((e,i)=>{
              return(
           <div className="box3">{e}  <button className="delBtn" onClick={()=>dispatch(deleteElement(i))}>Delete</button>  </div>
              )
         })


}
           


        </div>
         
       


        </div>



     </>
   )
}

export default App;


                      
