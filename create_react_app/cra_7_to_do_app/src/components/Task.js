import React from "react";

const Task = (props) => {
    const style = {
        color: 'red'
    }
    const {text, date, id, active, important, finishDate} = props.task;
    if (active) {
        return (
            <div>
                <p>
                    <strong style={important ? style : null}>{text}</strong> - do <span>{date} </span>
                    <button onClick={() => props.changeTaskStatus(id)}>Zrobione!</button>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div>
        )
    } else {
        const finish = new Date(finishDate).toLocaleString();
        return (
            <div>
                <p style={{fontSize: '12px'}}>
                    <strong>{text}</strong><em>(zrobić do {date}) </em><br/>
                    - potwierdzenie wykonania <span>{finish}</span>
                    <button onClick={() => props.deleteTask(id)}>X</button>
                </p>
            </div>
        )
    }

}

export default Task;