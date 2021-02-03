class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            number: 0,
        }
        console.log("wywolana metoda constructor")
    }
    componentWillMount() {
        console.log("Wywolana ComponentWillMount")
    }
    componentDidMount() {
        console.log("Wywolana componentDidMount")
        this.setState({
            number: this.state.number + 1
        })
    }
    componentDidUpdate() {
        console.log("Wywolana componentDidUpdate")
    }
    render () {
        console.log("wywolana metoda render")
        return (
            <>
            <p>
                lifecycle - montowanie komponentu
            </p>
            <Child/>
            </>
        )
    }
}
class Child extends React.Component {
    componentDidMount() {
        console.log(`
        ----------------------------------
        Wywolana componentDidMount w komponencie Child`)
        // this.setState({
        //     number: this.state.number + 1
        // })
    }
    render() {
        console.log(`
        ----------------------------------
        Wywolana render w komponencie Child`)
        return (
            <h1>Dziecko</h1>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))