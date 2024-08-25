import React, {useState} from 'react'
import "./Todolist.css"

const Todolist = () => {

    const [Task,setTask] = useState([]);
    const [newTask,setnewTask] = useState("");

    function HandleinputChange(event){
        setnewTask(event.target.value)
    }

    function addTask(){
        if(newTask.trim() != ""){
        setTask(t => [...Task,newTask]);
        setnewTask("");
        }
    }

    function deleteTask(index){
        const updateTask = Task.filter((Element,i) => i != index);
        setTask(updateTask);
    }

    function Taskup(index){
        const updateTask =[...Task];
        if(index >0){
        [updateTask[index],updateTask[index-1]] = [updateTask[index-1],updateTask[index]];
        setTask(updateTask);
    }
    }
    function Taskdown(index){
        const updateTask =[...Task];
        if(index < Task.length - 1){
        [updateTask[index], updateTask[index + 1]] = [updateTask[index + 1], updateTask[index]];
        setTask(updateTask);
    }

    }
  return (
    <div className='main'>
         <div className='contents'>
        <h1>TO DO LIST</h1>

        <div className="input-n-btn">
            <input 
            type="text" 
            placeholder="Enter a Task..."
            value={newTask}
            onChange={HandleinputChange}
            />

            <button 
            className='add-btn'
            onClick={addTask}>
                Add
            </button>
        
        </div>

            <ol>
                {Task.map((Task,index) =>
                    <li key={index}>
                        <span>{Task}</span>
                        <div className="li-content">
                            <button
                            className='del-btn'
                            onClick={() => deleteTask(index)}
                            >
                                Delete
                            </button>

                            <button
                            className='up-btn'
                            onClick={() => Taskup(index)}
                            >
                                <img src="./images/icons8-arrow-up-30.png"/>   
                            </button>    
                            <button
                            className='down-btn'
                            onClick={() => Taskdown(index)}
                            >
                                <img src="./images/icons8-arrow-down-30.png"/>  
                            </button>  
                        </div>
                    </li>

                )}  
            </ol>
      
        </div>

    </div>
  )
}

export default Todolist
