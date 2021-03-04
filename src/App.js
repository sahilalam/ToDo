import React, { useState } from "react";


function App()
{
  let [todos,setTodos]=useState([]);
  let [todo,setTodo]=useState("");
  let [update,setUpdate]=useState(-1);
  let add=()=>
    {
      if(todo.length>0)
      {
        if(update===-1)
        {
          let tmp=[...todos];
          tmp.push(todo);
          setTodos(tmp);
          setTodo("");
        }
        else
        {
          let tmp=[...todos];
          tmp[update]=todo;
          setTodos(tmp);
          setUpdate(-1);
          setTodo("");
        }
       
      }
  
      
    }
    let del=(id)=>
    {
      let tmp=[...todos];
      tmp=tmp.filter((e,i)=>i!==id);
      setTodos(tmp);
    }
  
    let edit=(id)=>
    {
      setTodo(todos[id]);
      setUpdate(id);
    }
    let set=(event)=>
    {
      setTodo(event.target.value);
    }
    return (
      <div className="row justify-content-center p-5 text">
        <div className="col-12 text-center heading m-5">
          To-Do
        </div>
        <div className="col-12 text-center p-2">
          <input type="text" value={todo} className="form-control" onChange={set} id="input"></input>
        </div>
        <div className="col-4 text-center p-2">
          <a href="#" className="a" onClick={add}>
            <div className="button">
              ADD
            </div>
          </a>
        </div>
        <div className="col-12 p-3 mt-5 box text-center">
          <div >My Todos</div>
          <div className="row justify-content-center">
            {
              todos.map((e,i)=>{
                return (
                    <div className="row justify-content-center" key={i} id={i}>
                      <div className="col-10 p-2 mt-5 background box" >
                        {e}
                      </div>
                      <div className="col-6 text-center p-2">
                        <a href="#" onClick={()=>{edit(i)}}>Edit</a>
                      </div>
                      <div className="col-6 text-center p-2">
                        <a href="#" onClick={()=>{del(i)}}>Delete</a>
                      </div>
                    </div>
                )
              })
              
            }
            
          </div>
        </div>
      </div>
    );
  }



export default App;
