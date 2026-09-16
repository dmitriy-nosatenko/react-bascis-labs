const Task = (props) => {

        return (
        <div className="card">
            <p className="title"> {props.title}</p>
            <p>Due: {props.deadline}</p>
            <p className="bold"> {props.description}</p>
            <p className="bold"> {props.priority}</p>
        </div>
    )

}

export default Task;

