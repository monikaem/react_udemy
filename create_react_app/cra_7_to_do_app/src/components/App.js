import React, { Component } from 'react';
import './App.css';
import AddTask from "./AddTask";
import TasksList from "./TasksList"


class App extends Component {
    state = {
        tasks: [
            {
                id: 0,
                text: 'zagrać wreszcie w grę',
                date: '2021-02-15',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 1,
                text: 'isc do sklepu',
                date: '2021-02-19',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 2,
                text: 'kupic samochod',
                date: '2021-05-21',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 3,
                text: 'jechac na wakacje',
                date: '2021-07-02',
                important: true,
                active: true,
                finishDate: null,
            },
            {
                id: 4,
                text: 'ugotowac obiad',
                date: '2021-02-08',
                important: false,
                active: true,
                finishDate: null,
            },
            {
                id: 5,
                text: 'pocwiczyc',
                date: '2021-04-09',
                important: false,
                active: true,
                finishDate: null,
            },
        ],
    }
    counter = [...this.state.tasks].length;
    deleteTask = (id) => {
        const tasks = [...this.state.tasks];
        const index = tasks.findIndex(task => task.id === id)
        tasks.splice(index, 1)
        this.setState({
            tasks,
        })
    }
    changeTaskStatus = (id) => {
       const tasks = Array.from(this.state.tasks);
       tasks.forEach(task => {
        if (task.id === id) {
            task.active = false;
            task.finishDate = new Date().getTime()
        }
        })
        this.setState({
        tasks,
        })
    }
    addTask = (text, date, important) => {
        const tasks = [...this.state.tasks]
      const task = {
          id: this.counter,
          text, // tekst z inputa
          date, // tekst z inputa
          important, // wartosc z inputa
          active: true,
          finishDate: null,
      }
      this.counter++
        tasks.push(task);
        this.setState({
            tasks,
        })
        return true;
    }

  render() {
    return (
      <div className="App">
          <h1>TO DO APP</h1>
        <AddTask addTask={this.addTask} tasks={this.state.tasks}/>
        <TasksList changeTaskStatus={this.changeTaskStatus} deleteTask={this.deleteTask} tasks={this.state.tasks}/>
      </div>
    );
  }
}

export default App;
