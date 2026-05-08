import TaskCard from "./TaskCard";

function TaskList({
    tasks,
    deleteTask,
    completeTask
}){

    if(tasks.length===0){

        return(

            <h2 className="empty">
                No Tasks Found
            </h2>
        )
    }

    return(

        <div className="task-list">

            {
                tasks.map((task)=>(

                    <TaskCard
                        key={task.id}
                        task={task}
                        deleteTask={deleteTask}
                        completeTask={completeTask}
                    />
                ))
            }

        </div>
    )
}

export default TaskList;