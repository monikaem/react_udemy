import React, { Component } from 'react';
import './App.css';

//pseudo rosnaca baza danych
const data = [
  {id: 1, title: 'Wiadomość numer 1', body: 'Zawartość wiadomości nr 1 ...'},
  {id: 2, title: 'Wiadomość numer 2', body: 'Zawartość wiadomości nr 2 ...'},
]

setInterval(() => {
  const index = data.length + 1;
  data.push({
    id: index,
    title: `Wiadomość numer ${index}`,
    body: `Zawartość wiadomości nr ${index} ...`
  })
},5000)

class App extends Component {
  state = {
    comments: [...data],
  }
  interval = ""
getData = () => {
      console.log("aktualizacja")
    if (this.state.comments.length !== data.length){
    this.setState({
      comments: [...data]
    })} else {
        console.log('dane takie same, nie aktualizuje')
    }
}
componentDidMount() {
     this.interval = setInterval(this.getData,1000)
}
componentWillUnmount() {
      clearInterval(this.interval)

}

    render() {
    const comments = this.state.comments.map(comment => (
        <div key={comment.id}>
          <h4>{comment.title}</h4>
          <div>{comment.body}</div>
        </div>
    ))
    return (
      <div className="App">
        {comments.reverse()}
      </div>
    );
  }
}

export default App;
