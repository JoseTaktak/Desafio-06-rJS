import ItemDetailContainer from "./components/ItemDetailContainer";
import NavBar from "./components/NavBar";
import Productos from "./components/Productos";
import { data } from "./utils/data";


const App = () => {
  return (
    <>
    <NavBar />
    <hr></hr>
    {/* <Productos items={data} />     */}
    <ItemDetailContainer />
    </>
  );
    
};

export default App;