class Counter extends React.Component {
    state = {
        count: 0,
        result: this.props.result
    }
    handleMathClick = (type, number = 1) => {
        if (type === 'subtract') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result - number
            }))
        } else if (type === 'add') {
            this.setState((prevState) => ({
                count: prevState.count + 1,
                result: prevState.result + number
            }))
        } else if (type === 'reset') {
            this.setState(() => ({
                count: 0,
                result: this.props.result
            }))
        }
    }

    render () {
        return (
            <>
                <MathButton
                    name="-10"
                    number="10"
                    type="subtract"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="-1"
                    number="1"
                    type="subtract"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="reset"
                    type="reset"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="+1"
                    number="1"
                    type="add"
                    click={this.handleMathClick}
                />
                <MathButton
                    name="+10"
                    number="10"
                    type="add"
                    click={this.handleMathClick}
                />

                <DisplayPanel
                count={this.state.count}
                result={this.state.result}
                />
            </>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)  //zamiana stringa na number
    return (
        <button onClick={() => props.click(props.type, number)}>{props.name}</button>
    )
}

const DisplayPanel = (props) => {
    return (
        <>
            <h1>Liczba kliknięć: {props.count}{props.count > 10 ? <span>. Przeciążenie procesora!</span> : null}</h1>
            <h1>Wynik: {props.result}</h1>
        </>
    )
}


const startValue = 0;
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))