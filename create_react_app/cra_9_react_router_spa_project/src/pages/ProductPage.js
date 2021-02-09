import React from 'react';
import Product from '../components/Product'
import {Link} from "react-router-dom";

const ProductPage = (props) => {
    const {match} = props;
    return (
        <>
        <div>Strona produktu</div>
            <Product id={match.params.id}/>
            <Link to="/products">Powrót do listy produktów</Link>
        </>
    )
}

export default ProductPage;