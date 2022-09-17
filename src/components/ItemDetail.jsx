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
        <DetailContainer>
            <WrapperDetail>
                <imgContainer>
                <ImageDetail src={item.image[5]} />
                </imgContainer>
                <InfoContainer>
                    <Title>{item.name}</Title>
                    <Desc>{item.descriptio}</Desc>
                    <Price>$ {item.cost}</Price>
                    <Desc>{item.stock} unidades en Stock</Desc>
                </InfoContainer>
                <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
            </WrapperDetail>
        </DetailContainer>
        :<p>Cargando...</p>
    }
    </>
);
}

export default ItemDetail;