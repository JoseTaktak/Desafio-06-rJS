import ItemCount from "./ItemCount";
import React, { useEffect } from "react";
import { useState } from "react";
import customFetch from "../utils/promesa";
import {data} from "../utils/data";




const ItemListContainer = () => {
const [Products, setProducts] = useState([]);


          useEffect(() => {
          desafio(data)
          .then(result => setItemP(result))
          .catch(err => console.log(err))
      }, []);

  

return (

      <>
      {
        itemP.map(item => (
          <>
          <h4>{item.title}</h4>
          <img src={item.image} />
          </>
        ))
      }
         
      </>
      );
}

  
  export default ItemListContainer;