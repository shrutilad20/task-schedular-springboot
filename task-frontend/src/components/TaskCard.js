function TaskCard({
    task,
    deleteTask,
    completeTask
}){

    const overdue =
    new Date(task.dueDate) < new Date()
    && !task.completed;

    return(

        <div className="task-card">

            <h2>
                {task.title}
            </h2>

            <p>
                Priority:
                {" "}
                <strong>
                    {task.priority}
                </strong>
            </p>

            <p>
                Due:
                {" "}
                {task.dueDate}
            </p>

            {
                overdue
                ?
                <p className="overdue">
                    Overdue
                </p>
                :
                null
            }

            {
                task.completed
                ?
                <p className="completed">
                    Completed
                </p>
                :
                <button
                    onClick={()=>completeTask(task)}
                >
                    Complete
                </button>
            }

            <button
                className="delete-btn"
                onClick={()=>deleteTask(task.id)}
            >
                Delete
            </button>

        </div>
    )
}

export default TaskCard;