class App extends React.Component {
state = {
    fortunes: ["Zostaniesz milionerem", "W tym roku wyjdziesz za mąż", "Czeka Cię przeprowadzka"],
    value: "",
    fortune: "",
}
displayFortune = () => {
    let randomNumber = Math.floor(Math.random() * this.state.fortunes.length)
    this.setState({
        fortune: this.state.fortunes[randomNumber]
    })
}
handleAddFortune = (e) => {
    let inputText = this.state.value;
    const fortunes = this.state.fortunes
    if (inputText) {
        fortunes.push(inputText)
        alert(`Dodano do listy wróżb: ${inputText}. Na liście są aktualnie: ${fortunes.join(', ')}`)
        this.setState({
            value: '',
            fortunes,
        })
    } else alert ('Najpierw wpisz wróżbę!')
}
handleInputChange = (e) => {
    this.setState({
        value: e.target.value,
        fortune: '',
    })
}
render() {
    return (
        <>
            <button className="showHideButton" onClick={this.displayFortune}>Pokaż wróżbę</button>
            <br/>
            <input value={this.state.value} onChange={this.handleInputChange}/>
            <button className="addButton" onClick={this.handleAddFortune}>Dodaj wróżbę</button>
            <div className="displayPanel">{this.state.fortune}</div>
        </>
    )
}
}


ReactDOM.render(<App/>, document.getElementById('root'))