class App extends React.Component {
    state = {
        active: true,
    }
    handleClick = () => {
        this.setState((state) => ({
            active: !state.active,
        }))
}
    render () {
        return (
            <div>
                <SwitchButton click={this.handleClick} active={this.state.active}/>
                {this.state.active  && <Clock/>}
            </div>
        )
    }
}
const SwitchButton = (props) => {
    return (
       <button onClick={props.click}>{props.active ? "Wyłącz zegar" : "Włącz zegar"}</button>
    )
}

class Clock extends React.Component {

    interval = ""
state = {
    time: this.getTime(),
}
getTime () {
    const currentTime = new Date();
    return ({
        hours: currentTime.getHours(),
        minutes: currentTime.getMinutes(),
        seconds: currentTime.getSeconds()
    })
}
setTime = () => {
const time = this.getTime()
    this.setState({
        time,
    })
}
componentDidMount() {
    this.interval = setInterval(() => this.setTime(), 1000)
}

componentWillUnmount() {
    clearInterval(this.interval)
}
    render() {
    this.getTime()
        const {hours, minutes, seconds} = this.state.time
        return(
            <>
            <h1>
                {hours < 10 ? `0${hours}` : hours} : {minutes < 10 ? `0${minutes}` : minutes} : {seconds < 10 ? `0${seconds}` : seconds}
            </h1>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))