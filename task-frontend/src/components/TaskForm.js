import { useState } from "react";

function TaskForm({addTask}){

    const [title,setTitle] = useState("");

    const [priority,setPriority] = useState("");

    const [dueDate,setDueDate] = useState("");

    const handleSubmit = ()=>{

        if(title===""){
            alert("Enter Task");
            return;
        }

        const task = {

            title,
            priority,
            dueDate,
            completed:false
        };

        addTask(task);

        setTitle("");
        setPriority("");
        setDueDate("");
    };

    return(

        <div className="form">

            <input
                type="text"
                placeholder="Task Title"
                value={title}
                onChange={(e)=>setTitle(e.target.value)}
            />

            <select
                value={priority}
                onChange={(e)=>setPriority(e.target.value)}
            >

                <option value="">
                    Select Priority
                </option>

                <option>
                    High
                </option>

                <option>
                    Medium
                </option>

                <option>
                    Low
                </option>

            </select>

            <input
                type="date"
                value={dueDate}
                onChange={(e)=>setDueDate(e.target.value)}
            />

            <button onClick={handleSubmit}>
                Add Task
            </button>

        </div>
    )
}

export default TaskForm;