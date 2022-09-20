import ItemCount from "./ItemCount";
import { DetailContainer, WrapperDetail, imgContainer, ImageDetail, InfoContainer, Title, Desc, Price } from "./Productos";

const ItemDetail = ({ item }) => {
    const onAdd = (qty) => {
        alert("Seleccionaste " + qty + " items.");
      }


return (
    <>
    {
        item.image
        ?
        <div> 
            <div>
                <div>
                    <img src={item.image[5]} />
                </div>
                <div>
                    <p>{item.name}</p>
                    <p>{item.descriptio}</p>
                    <p>$ {item.cost}</p>
                    <p>{item.stock} unidades en Stock</p>
                </div>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </div>
        </div>
        :<p>Cargando...</p>
    }
    </>
);
}

export default ItemDetail;