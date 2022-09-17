import { useEffect } from 'react'; 
import Products from "./Products";

const Productos = (props) => {

    return (
    <>
    {
        props.items.map(item => (
        <Products
            key={item.id}
            title={item.title}
            image={item.image}
            info={item.info}
            Precio={item.Precio} />
    ))
  }
  </>
    );
}

  export default Productos;