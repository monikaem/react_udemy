const Header = () => {
    return <h1 className="title">Witaj na stronie!</h1>
}
const handleClick = () => alert('klik klik');
const classBig = "big";
const Main = () => {
    return (
    <div>
        <h1 onClick={handleClick} className="red">Pierwszy artykuł</h1>
        <p>Lorem ipsum</p>
    </div>
)
}

class Footer extends React.Component {
    state = {
        number: 0,
    }
    render() {
        return (
            <footer>
                <h1>Komponent klasowy {this.state.number}</h1>
                <p className={classBig}>Stopka</p>
            </footer>
        )
    }
}



const App = () => {
    return (
        <>
        <Header/>
        <Main/>
        <Footer/>
        </>
    )
}

ReactDOM.render(<App/>, document.getElementById('root'))



