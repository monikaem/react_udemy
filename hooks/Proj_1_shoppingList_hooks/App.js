const ShoppingList = () => {
     const [items] = React.useState({
         items1: 'ogórki',
         items2: 'sok',
         items3: 'coś do picia'

     })
        return(
            <>
                <h1>Lista zakupów</h1>
                <ul>
                    <ItemList name={items.items1} example={2+2}/>
                    <ItemList name={items.items2}/>
                    <ItemList name={items.items3}/>
                </ul>
            </>
        )
}

const ItemList = ({name, example}) => (
            <li>{name} - {example}</li>
        );



ReactDOM.render(<ShoppingList/>, document.getElementById('root'))