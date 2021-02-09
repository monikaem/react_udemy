import React, {Component} from 'react';
import '../styles/ContactPage.css';
import {Prompt} from 'react-router-dom';


class ContactPage extends Component  {
    state = {
        value: '',
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            value: '',
        })
    }
    handleChange = (e) => {
        this.setState({
            value: e.target.value,
        })
    }
    render () {
    return (
        <div className="contact" onSubmit={this.handleSubmit}>
            <form>
                <h3>Napisz do nas</h3>
                <textarea placeholder="Wpisz wiadomość..." value={this.state.value} onChange={this.handleChange}></textarea>
                <button>Wyślij</button>
            </form>
            <Prompt when={this.state.value} message='Po cofnięciu utracisz swoją wiadomość, czy na pewno chcesz opuścić tę stronę'/>
        </div>
    )
    }
}

export default ContactPage;