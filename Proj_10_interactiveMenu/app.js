const Item = (props) =>
    <li style={props.active ? { fontWeight: 'bold' } : { color: 'gray'}}
        onClick={() => props.changeStatus(props.id)}>
        {props.name}
    </li>

const ListItems = (props) => {
    const items = props.items.map(item =>
        <Item
        key={item.id}
        id={item.id}
        name={item.name}
        active={item.active}
        changeStatus={props.changeStatus}
        />)
    return (
        <>
        <h1>Twoje zamówienie</h1>
        <ul>
            {items}
        </ul>
        </>
    )
}
const Header = (props) => {
    const activeItems = props.items.filter(item => item.active)
    const number = activeItems.length;
    return (
        <header>
            <h2>Podsumowanie zamówienia: {number}</h2>
            <h2>Do zapłaty: {number ? `${number * 10} złotych` : `Nie kupujesz to nie płacisz`}</h2>
        </header>
    )
}
class App extends React.Component {
    state = {
        items: [
            {id:1, name: "herbata", active: true},
            {id:2, name: "ziemniaki", active: false},
            {id:3, name: "kasza", active: false},
            {id:4, name: "zupka chińska", active: false},
            {id:5, name: "masło", active: false},
            {id:6, name: "chleb", active: true},
        ],
    }
    handleChangeStatus = (id) => {
        const items = this.state.items.map(item => {
            if (id === item.id){
                item.active = !item.active
            }
            return item
        })
        this.setState({
            items: items
        })
    }

    render() {
        return (
            <>
                 <Header items={this.state.items}/>
                 <ListItems items={this.state.items} changeStatus={this.handleChangeStatus}/>
            </>
        )
    }
}

ReactDOM.render(<App/>, document.getElementById('root'))