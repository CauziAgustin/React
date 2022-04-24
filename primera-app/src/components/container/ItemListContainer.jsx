import React from "react";

const ItemListContainer = ({}) => {
  return (
    <>
      <div style={{ display: "flex", direcction: "wrap", justifyContent: "center", alignItems:'center'}}>
        <div class="card w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src="https://unsplash.com/photos/Mi5tb_R1zzw" alt="celular"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">SmartPhone!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src="https://unsplash.com/photos/Mi5tb_R1zzw" alt="celular"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">SmartPhone!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
        <div class="card w-96 bg-base-100 shadow-xl m-4">
          <figure>
            <img src="https://unsplash.com/photos/Mi5tb_R1zzw" alt="celular"/>
          </figure>
          <div class="card-body">
            <h2 class="card-title">SmartPhone!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div class="card-actions justify-end">
              <button class="btn btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ItemListContainer;
