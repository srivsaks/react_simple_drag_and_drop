import logo from './logo.svg';
import './App.css';
import React,{useState} from "react";

function App() {
  const[list,setList]=useState(["Task1","Task2","Task3","Task4","Task5","Task6"])
  const[draggedItem,setDraggedItem]=useState(null);

  const handleDragStart=(e,index)=>{
  setDraggedItem(list[index]);
  //e.dataTransfer.effectAllowed="move";
  e.dataTransfer.setData("text",e.target.parentNode)

  /*setTimeout(()=>{
    e.target.style.display="none"
  },0)*/
  
  }

  const handleDragOver=(e,index)=>{
    e.preventDefault();
    const draggedOverItem=list[index];
    if(draggedOverItem===draggedItem){
      return;
    }
    const filteredItems=list.filter((item)=>{
      return item!==draggedItem
    })

    filteredItems.splice(index,0,draggedItem);
    setList(filteredItems);
    }

  return (
    <div className="App">
      <header className="App-header">
         <h3>Drag and Drop Project</h3>
         <ul>
           {list.map((item,index)=>(
             <li className='item-style' onDragOver={(e)=>{handleDragOver(e,index)}}>
            <div draggable onDragStart={(e)=>{handleDragStart(e,index)}}>
            {item}
            </div>
             </li>
           ))}
         </ul>
      </header>
    </div>
  );
}

export default App;
