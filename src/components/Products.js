import { useState, useEffect  } from "react";

const Products = (props) => {
    // const [rate, setRate] = useState(0); //Hook
    // const [isValid, setIsValid] = useState(true);

    // //componentDidMount
    // useEffect(() => {
    //     console.log("Soy el componente Products")
    // }, [])

    // const rateHandler = () => {
    //     setRate(rate+1)
    // }


    return (
    <div className="products-containers">
        <div className="products-image">
            <img src={props.image} alt="" />
        </div>
    
    <div className="products-info">
        <h3>{props.title}</h3>
        <h4>{props.id}</h4>
        <h4>{props.info}</h4>
        <h4>{props.Precio}</h4>
        
    </div>
    </div>
    );
} 

export default Products;