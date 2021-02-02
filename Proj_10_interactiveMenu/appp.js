const Header = (props) => {
    const activeItemsNumber = props.data.filter(item => item.active).length;
    return (
       <>
        <h2>Podsumowanie zamówienia: {activeItemsNumber} </h2>
           <h2>Do zapłaty: {activeItemsNumber > 0 ? `${activeItemsNumber * 10} złotych` : 'Nic nie wybrałeś' } </h2>
       </>

    )
}
const Item = (props) => {
    return (
        <li style={props.active ? {fontWeight: 'bold'} : {color: 'gray'}} onClick={() => props.click(props.id)}>{props.name}</li>
    )
}
const ItemsList = (props) => {
    const items = props.data.map(item =>
        <Item
            name={item.name}
            key={item.id}
            active={item.active}
            id={item.id}
            click={props.click}
        /> )
    return (
        <>
            <h1>Twoje zamówienie</h1>
            <ul>
                {items}
            </ul>
        </>
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
        ]
    }
    handleActive = (id) => {
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
        return(
            <>
                <Header data={this.state.items}/>
                <ItemsList data={this.state.items} click={this.handleActive}/>
            </>
        )
    }
}


ReactDOM.render(<App/>, document.getElementById('root'))