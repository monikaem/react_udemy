import React, {PureComponent, createRef} from "react";



class Counter extends PureComponent {
    state = {
        counter: 0,
    }
    componentRef = createRef(true);

    asyncIncreaseCounterValue = () => setTimeout(
        () => {
            if (this.componentRef.current) {
                this.setState(prevState => ({
                    counter: prevState.counter + 1,
                }))}}, 3000)

    render () {
        const {counter} = this.state;
        return (
            <div ref={this.componentRef}>
                <p>Wartość licznika wynosi {counter}</p>
                <button onClick={this.asyncIncreaseCounterValue}>
                    Pobierz asynchroniczne dane
                </button>
            </div>
        )
    }
}

export default Counter;