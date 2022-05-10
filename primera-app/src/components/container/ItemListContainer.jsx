import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "./ItemList";

const ItemListContainer = ({}) => {
  const {breed} = useParams()

  
  return (
    <>
    <ItemList breed={breed}/>
    </>
  );
};

export default ItemListContainer;
