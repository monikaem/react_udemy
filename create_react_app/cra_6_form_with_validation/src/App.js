import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    username: '',
    email: '',
    password: '',
    isChecked: false,
    finalMessage: '',
    errors: {
      username: false,
      email: false,
      password: false,
      isChecked: false,
    }
  }
  messages = {
    username_incorrect: 'Nazwa musi być dłuższa niż 10 znaków i nie może zawierać spacji!',
    email_incorrect: 'Brak @ w emailu!',
    password_incorrect: 'Hasło musi mieć 8 znaków!',
    isChecked_incorect: 'Musisz zaakceptować regulamin!',
  }
  handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    const checked = e.target.checked;
    const type = e.target.type;
    if (type !== 'checkbox'){
    this.setState({
      [name]: value,
    })
    } else {
      this.setState({
        [name]: checked
      })

    }
  }
  handleSubmit = (e) => {
    e.preventDefault()
    const validation = this.formValidation();
    if (validation.correct) {
      this.setState({
        username: '',
        email: '',
        password: '',
        isChecked: false,
        message: 'Formularz został wysłany!',
        errors: {
          username: false,
          email: false,
          password: false,
          isChecked: false,
        }
      })
    } else {
      this.setState({
        errors: {
          username: !validation.username,
          email: !validation.email,
          password: !validation.password,
          isChecked: !validation.isChecked,
        }
      })
    }

  }
  formValidation = () => {
    // true - ok, false - not ok
    let username = false;
    let email = false;
    let password = false;
    let isChecked = false;
    let correct = false// czy caly formularz jest ok
    if (this.state.username.length > 10 && this.state.username.indexOf(' ') === -1) {
      username = true;
    }
    if (this.state.email.indexOf('@') !== -1) {
      email = true;
    }
    if (this.state.password.length === 8) {
      password = true;
    }
    if (this.state.isChecked) {
      isChecked = true;
    }
    if (username && email && password && isChecked) {
      correct = true;
    }
    return ({
      correct,
      username,
      email,
      password,
      isChecked
    })
  }
  componentDidUpdate () {
    if (this.state.message !== ''){
      setTimeout(() => {
        this.setState({
          message: '',
        })
      }, 3000)
    }
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit} noValidate>
          <label htmlFor="user">Twoje imię:
            <input onChange={this.handleChange} type="text" id="user" name="username" value={this.state.username}/>
            {this.state.errors.username && <span>{this.messages.username_incorrect}</span>}
          </label>

          <label htmlFor="email">Twój adres e-mail:
            <input id="email" name="email" type="email" value={this.state.email} onChange={this.handleChange}/>
            {this.state.errors.email && <span>{this.messages.email_incorrect}</span>}
          </label>

          <label htmlFor="password">Hasło:
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handleChange}/>
            {this.state.errors.password && <span>{this.messages.password_incorrect}</span>}
          </label>

          <label htmlFor="accept">
          <input id="accept" type="checkbox" name="isChecked" onChange={this.handleChange} checked={this.state.isChecked}/>
          Zapoznałem się z regulaminem
          </label>
          {this.state.errors.isChecked && <span>{this.messages.isChecked_incorect}</span>}
          <button>Zapisz się</button>
          {this.state.message && <div className="answer">{this.state.message}</div>}
        </form>
      </div>
    );
  }
}

export default App;
