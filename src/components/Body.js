import React from "react";
import shirt from '../components/img/p1.jpeg';
import data from "../data";
import Product from "./Product";

function Body() {
  return (
    <div>
      <main>
        <div>
          <div class="row center">
            {data.products.map((product) => (
              <Product key={product.id} product={product}></Product>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

export default Body;
