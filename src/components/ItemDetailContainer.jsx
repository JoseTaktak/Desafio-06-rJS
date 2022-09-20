import { useEffect, useState } from "react";
import customFetch from "../utils/promesa";
import ItemDetail from "./ItemDetail";
import Products from "./Products";

//const { articulos } = requiere("../utils/data")

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect (() => {
        customFetch(Products[4], 2000)
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;