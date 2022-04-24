
import "./App.css";
import { buildQueries } from "@testing-library/react";
import NavBar from "./components/container/NavBar";
import ItemListContainer from "./components/container/ItemListContainer";
import Footer from "./components/container/Footer";


function App() {
  return (
    <>
  <NavBar></NavBar>
  <ItemListContainer></ItemListContainer>
    <Footer></Footer>
    </>
  );
}

export default App;
