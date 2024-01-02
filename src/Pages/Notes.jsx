import React from "react";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../Redux/Reducers/tasks.reducer";
import "./Notes.css";
export default function Notes (){
  const dispatcher = useDispatch(); 
const inputRef=useRef(null);
  function addtask() {
    dispatcher(addTodo(inputRef.current.value));
    inputRef.current.value = "";
    
  }
	return(
		<div className="main-content">
      <div className="card-task">
        <div className="col-md-12">
          <div className="card1">
            <div className="card-body1">
              <div className="title1">Add a Notes <span className="x"><i className="bi bi-x-lg"></i></span></div>
                <from>
                  <div>
                  <input ref={inputRef} className= "Titles" placeholder="Title"/>
                  </div>
                  <div className="flex flex-col">
                    <div className="Text-area">
                    <textarea ref={inputRef} className="text" placeholder="Take a note..."/>
                    <div className="Add-btn"><button onClick={addtask} type="submit" className="button">Add Note</button></div>
                    </div>
                  </div>
                </from>
              <h6 className="Time"><i className="bi bi-clock"></i>Today,10:10AM</h6>
                 <div className="line">
                  <i className="bi bi-list-task icons1"></i>
                  <i className="bi bi-text-left icons1"></i>
                 <i className="bi bi-arrow-counterclockwise icons1"></i>
                  <i className="bi bi-arrow-clockwise icons1"></i>
                 </div>
             </div>
           </div>
         </div>
        </div>
      
		<div className="header1"><i className="bi bi-file-earmark-text icon"></i>My Notes</div>  
      <h6 className="sub-header">Recently viewed</h6>
      <div className="notes">
      
        </div>
       </div> 
      
	)
} 