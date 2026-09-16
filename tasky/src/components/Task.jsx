const Task = (props) => {

        return (
        <div className="card" style={{backgroundColor: props.done ? 'lightgrey' : '#5bb4c4'}}>
            <p className="title"> {props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="bold"> {props.description}</p>
            <p className="bold"> {props.priority}</p>
            <button className="doneButton"onClick={props.markDone}>Done</button>
        </div>
    )

}

export default Task;

