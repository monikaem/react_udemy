const Person = (props) => {
    const people = props.people
    return (
        people.map(person => <li key={person.id} id={person.id}>{person.name}<button onClick={() => props.click(person.id)}>Usuń</button></li>)
    )
}

class List extends React.Component {
    state = {
        people: [
            {
                name: "Anna W.",
                id: 0,
            },
            {
                name: "Dominika P.",
                id: 1,
            },
            {
                name: "Justyna K.",
                id: 2,
            },
            {
                name: "Patrycja N.",
                id: 3,
            },
            {
                name: "Jan K.",
                id: 4,
            },
            {
                name: "Michał Z.",
                id: 5,
            },
        ]
    }
    handleDelete = id => {
        const people = this.state.people
        let index = people.findIndex(person => id === person.id)
        people.splice(index, 1);
        this.setState({
            people,
        })

    }
    render () {
        return(
            <ul>
                <Person click={this.handleDelete} people={this.state.people}/>
            </ul>
        )
}
}



ReactDOM.render(<List/>, document.getElementById('root'))

