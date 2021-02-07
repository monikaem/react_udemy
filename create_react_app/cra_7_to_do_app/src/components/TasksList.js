import React from "react";
import Task from "./Task";

const TasksLists = (props) => {
    const active = props.tasks.filter(task => task.active)
    const done = props.tasks.filter(task => !task.active)
    // done.sort((a,b) => b.finishDate - a.finishDate) //to samo co nizej
    if (done.length >= 2) {
    done.sort((a,b) => {
        if (a.finishDate > b.finishDate){
            return -1
        }
        if (a.finishDate < b.finishDate){
            return 1
        }
        return 0
    })
    }

    if (active.length >= 2) {
    active.sort((a,b) => {
        a = a.text.toLowerCase();
        b = b.text.toLowerCase();
        if (a.text > b.text) {
            return 1
        }
        if (a.text < b.text) {
            return -1
        }
        return 0
    })
    }

    const activeTasks = active.map(task => (
        <Task key={task.id} task={task} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask}></Task>
    ))
    const doneTasks = done.map(task => (
        <Task key={task.id} task={task} changeTaskStatus={props.changeTaskStatus} deleteTask={props.deleteTask}></Task>
    ))



    return (
        <>
            <div className="active">
                <h1>Zadania do zrobienia</h1>
                {activeTasks.length > 0 ? activeTasks : 'Brak zadań!'}
            </div>
            <div className="done">
                <h3>Zadania zrobione <em>({doneTasks.length})</em></h3>
                {doneTasks.length > 5 && <span style={{fontSize: '10px'}}>Wyświetlonych jest jedynie 5 ostatnich wykonanych zadań!</span>}
                {doneTasks.slice(0, 5)}
                </div>
        </>
    )

}

export default TasksLists;