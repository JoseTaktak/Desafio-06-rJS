import { useEffect, useState } from "react";
import customFetch from "../utils/promesa";
import ItemDetail from "./ItemDetail";

const { articulos } = requiere("../utils/data")

const ItemDetailContainer = () => {
    const [dato, setDato] = useState ({});

    useEffect (() => {
        customFetch(2000, articulos[4])
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, []);

    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;