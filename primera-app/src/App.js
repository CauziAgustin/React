
import "./App.css";
import { buildQueries } from "@testing-library/react";
import NavBar from "./components/container/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import Footer from "./components/container/Footer";
import PokeContainer from "./components/pokemon/PokeContainer";




function App() {
  return (
    <>
    <NavBar></NavBar>
    <ItemListContainer></ItemListContainer>
    <PokeContainer/>
    <Footer></Footer>
    </>
  );
}

export default App;
