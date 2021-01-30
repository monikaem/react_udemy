class Message extends React.Component {
constructor (props) {
    super(props);
    this.state = {
        messageIsActive: false
    }
    this.handleMessageButton = this.handleMessageButton.bind(this)
}
handleMessageButton () {
    this.setState((prevState) => ({
        messageIsActive: !prevState.messageIsActive //po kliknieciu w przycisk zmienia stan zmiennej messageIsActive
    }))
}

render() {
    const text = 'Biblioteka React została zaprojektowana z myślą o stopniowym wdrażaniu. Dzięki temu zawarte w niej rozwiązania możesz stosować wybiórczo w zależności od potrzeb. Linki zawarte w tej części przewodnika wprowadzą cię do Reacta. Znajdziesz tu materiały, które pozwolą ci nie tylko dodawać elementy interaktywne do prostych stron HTML, lecz także rozpocząć prace nad bardziej zaawansowanymi aplikacjami bazującymi na Reakcie.'
    return (
        <>
            <button onClick={this.handleMessageButton}>{this.state.messageIsActive ? 'Ukryj' : 'Pokaż'}</button>
            {this.state.messageIsActive && <p>{text}</p>}
            </>
    )
}
}


ReactDOM.render(<Message/>, document.getElementById('root'))