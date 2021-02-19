const Counter = (props) => {
   const [count, setCount] = React.useState(0)
    const [result, setResult] = React.useState(props.result)

    const handleMathClick = (type, number = 1) => {
        if (type === 'subtract') {
            setCount(count + 1);
            setResult(result - number);
        } else if (type === 'add') {
            setCount(count + 1);
            setResult(result + number);
        } else if (type === 'reset') {
            setCount(0);
            setResult(props.result);
        }
    }

        return (
            <>
                <MathButton
                    name="-10"
                    number={10}
                    type="subtract"
                    click={handleMathClick}
                />
                <MathButton
                    name="-1"
                    number={1}
                    type="subtract"
                    click={handleMathClick}
                />
                <MathButton
                    name="reset"
                    type="reset"
                    click={handleMathClick}
                />
                <MathButton
                    name="+1"
                    number={1}
                    type="add"
                    click={handleMathClick}
                />
                <MathButton
                    name="+10"
                    number={10}
                    type="add"
                    click={handleMathClick}
                />

                <DisplayPanel
                count={count}
                result={result}
                />
            </>
        )
}

const MathButton = ({click, type, name, number}) => {
    return (
        <button onClick={() => click(type, number)}>{name}</button>
    )
}

const DisplayPanel = ({count, result}) => {
    const additionalInfo = count > 10 ? (<span> --- Przeciążenie procesora!</span>) : null;
    return (
        <>
            <h1>Liczba kliknięć: {count} {additionalInfo}</h1>
            <h1>Wynik: {result}</h1>
        </>
    )
}


const startValue = 0;
ReactDOM.render(<Counter result={startValue}/>, document.getElementById('root'))