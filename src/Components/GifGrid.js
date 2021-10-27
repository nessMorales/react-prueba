import React from "react";
import { useFetchGifts } from "../hooks/useFetchGifts";
import GifGridItem from "./GifGridItem";

const GifGrid = ({ category }) => {
  const { data: images, loading } = useFetchGifts(category);
  console.log(loading);

  return (
    <>
      <h3>{category}</h3>
      {loading && "Cargando..."}
      <div className="card-grid">
        {images.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};

export default GifGrid;
