const Cash = (props) => (
    <div>{props.title} {props.cash <= 0 ? "" : (props.cash / props.ratio * props.price).toFixed(2)} </div>
)

class ExchangeCounter extends React.Component {
    state = {
        amount: "",
        product: "electricity"
    }
    static defaultProps = {
        currencies: [
            {
                id: 0,
                name: 'złoty',
                ratio: 1,
                title: "Wartość w złotówkach:",
            },
            {
                id: 1,
                name: 'dollar',
                ratio: 3.6,
                title: "Wartość w dolarach:",
            },
            { id: 2,
                name: 'euro',
                ratio: 4.5,
                title: "Wartość w euro:"},
            {
                id: 3,
                name: 'pound',
                ratio: 4.55,
                title: "Wartość w funtach:"},
        ],
        prices: {
            electricity: .51,
            gas: 4.76,
            oranges: 3.79,
        }
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSelect = (e) => {
        this.setState({
            product: e.target.value,
            amount: '',
        })
    }
    insertSuffix = (select) => {
        if (select === "electricity") return <em>kWh</em>
        else if (select === "gas") return <em>litrów</em>
        else if (select === "oranges") return <em>kilogramów</em>
        else return null
    }
    selectPrice = (select) => {
        const price = this.props.prices[select]
        return price
    }

    render() {
        const price = this.selectPrice(this.state.product)
        const calculators = this.props.currencies.map(currency =>
            <Cash key={currency.id} name={currency.name} ratio={currency.ratio} title={currency.title} cash={this.state.amount} price={price}/>)
        return (
            <div className="app">
                <label>Wybierz produkt:
                    <select value={this.state.product} onChange={this.handleSelect}>
                        <option value="electricity">prąd</option>
                        <option value="gas">benzyna</option>
                        <option value="oranges">pomarańcze</option>
                    </select>
                    <br/>
                </label>
            <label>
                Wpisz kwotę w złotówkach
            <input name="amount" type="number" value={this.state.amount} onChange={this.handleChange}/>
                {this.insertSuffix(this.state.product)}
            </label>
                {calculators}
            </div>
        )
    }
}

ReactDOM.render(<ExchangeCounter/>, document.getElementById('root'))