const App = () => {
    const [value, setValue] = React.useState('')


    const handleChange = (e) => setValue(e.target.value.toUpperCase());

    const handleClick = () => setValue('');

        return (
            <>
                <input
                    value={value}
                    placeholder="Wpisz..."
                    onChange={handleChange}
                    type="text"
                />
                <button onClick={handleClick}>Reset</button>
                <h1 className="title">{value}</h1>
            </>
        )

}


ReactDOM.render(<App/>, document.getElementById('root'))