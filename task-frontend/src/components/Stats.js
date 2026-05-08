function Stats({tasks}){

    const total = tasks.length;

    const completed =
    tasks.filter(
        (task)=>task.completed
    ).length;

    const pending =
    total - completed;

    return(

        <div className="stats">

            <div className="stat-box">
                <h3>Total</h3>
                <p>{total}</p>
            </div>

            <div className="stat-box">
                <h3>Completed</h3>
                <p>{completed}</p>
            </div>

            <div className="stat-box">
                <h3>Pending</h3>
                <p>{pending}</p>
            </div>

        </div>
    )
}

export default Stats;