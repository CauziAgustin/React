
import "./App.css";
import { buildQueries } from "@testing-library/react";
import NavBar from "./components/container/NavBar";

import Footer from "./components/container/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home";
import ItemDetailContainer from "./components/container/ItemDetailContainer";
import ItemListContainer from "./components/container/ItemListContainer";


function App() {
  return (
    <BrowserRouter>
      <NavBar></NavBar>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/producto/:id' element={<ItemDetailContainer/>} />
        <Route path="/marcas/:breed" element={<ItemListContainer/>}/>
      </Routes>
      <Footer></Footer>
    
    </BrowserRouter>
  );
}

export default App;
