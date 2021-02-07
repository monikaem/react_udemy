import React, {Component} from 'react';
import './AddTask.css';

class AddTask extends Component {
    minDate = new Date().toISOString().slice(0,10);
    state = {
        task: '',
        checked: false,
        date: this.minDate,
    }
    handleChange = (e) => {
        if (e.target.type === 'text'){
            this.setState({
                [e.target.name]: e.target.value,
            })
        } else if (e.target.type === 'checkbox') {
            this.setState({
                [e.target.name]: e.target.checked,
            })
        } else {
            this.setState({
                [e.target.name]: e.target.value,
            })
        }
    }
    handleClick = () => {
        if (this.state.text) {
            const add = this.props.addTask(this.state.task, this.state.date, this.state.checked);
            if (add) {
                this.setState({
                    task: '',
                    checked: false,
                    date: this.minDate,
                })
            }
        } else {
            alert('nic nie wpisałeś!!!');
        }
    }
    render () {
        let maxDate = this.minDate.slice(0,4) * 1 + 1
        maxDate = maxDate+"-12-31"
        return (
            <div className="form">
                 <hr/>
                    <input onChange={this.handleChange} name="task" type="text" value={this.state.task} placeholder="Dodaj zadanie..."/>
                        <input onChange={this.handleChange} checked={this.state.checked} name="checked" type="checkbox" id="important"/>
                    <label htmlFor="important">Priorytet</label>
                <br/>
                    <label htmlFor="date">Do kiedy zrobić?</label>
                    <input type="date" value={this.state.date} min={this.minDate} max={maxDate} id="date" name="date" onChange={this.handleChange}/>
                    <br/>
                <button onClick={this.handleClick}>DODAJ</button>
            </div>
        )
    }
}

export default AddTask;