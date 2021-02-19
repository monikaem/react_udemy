const App = () => {
const [text, setText] = React.useState('')

    const handleClick = () => {
        const number = Math.floor(Math.random() * 10);

        setText(`${text}${number}`)
    }
        const btnName = "stwórz liczbę"
        return(
            <>
            <button onClick={handleClick}>{btnName}</button>                          <PanelResult text={text}/>
            </>
        )
}
const PanelResult = (props) => {
    return (
        <h1>{props.text}</h1>
    )
}


ReactDOM.render(<App btnTitle="dodaj cyfrę"/>, document.getElementById('root'))