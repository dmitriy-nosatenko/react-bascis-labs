const priorityColors = {
    Low: '#5bb4c4',
    Medium: '#f39c12',
    High: '#e74c3c', 
}; 

const Task = (props) => {

        return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : priorityColors[props.priority]}}>
            <p className="title"> {props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="bold"> {props.description}</p>
            <p className="bold"> {props.priority}</p>
            <button className="doneButton"onClick={props.markDone}>Done</button>
            <button className='deleteButton' onClick={props.deleteTask}>Delete</button>
        </div>
    )
}

export default Task;

