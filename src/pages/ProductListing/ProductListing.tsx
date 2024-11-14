import { useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import Button from "../../components/Button/Button";
import Filter from "../../icons/Filter";
import "./ProductListing.css";
import TemporaryDrawerFilter from "../../components/DrawerFilter/DrawerFilter";
import CardProduct from "../../components/CardProduct/CardProduct";
import { Close } from "@mui/icons-material";

const ProductListing = () => {
   const search = "Tênis";
   const number_of_results = 389;

   const isMobile = useMediaQuery("(max-width: 850px)");

   const productsCards = [
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
         percentage_off: 30,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
         percentage_off: 30,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
      {
         image: "./assets/product-image.webp",
         category: "tenis",
         content: "K-Swiss V8 - Masculino",
         current_price: 100,
         price_off: 200,
      },
   ];

   return (
      <section id="product-listing">
         <div id="content-product-listing">
            <div id="div-filter">
               <div id="container1">
                  <div id="sort-by">
                     <p>Ordenar por: </p>
                     <select name="select-sort-by" id="select-sort-by">
                        <option value="">mais relevantes</option>
                     </select>
                  </div>
                  {isMobile && <TemporaryDrawerFilter />}
               </div>
               <p id="result">
                  Resultado para "`{search}" -{" "}
                  <span>{number_of_results} produtos</span>
               </p>
            </div>
            <div id="content-listing">
               {/* Container de filtragem descktop */}
               {!isMobile && (
                  <section>
                     <form>
                        <div>
                           <h3>Filtrar por</h3>
                        </div>

                        <fieldset>
                           <legend>Marca</legend>
                           <label>
                              <input
                                 type="checkbox"
                                 name="marca[]"
                                 value="adiddas"
                              />{" "}
                              Adidas
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="marca[]"
                                 value="calenciaga"
                              />{" "}
                              Balenciaga
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="marca[]"
                                 value="k-swiss"
                              />{" "}
                              K-Swiss
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="marca[]"
                                 value="nike"
                              />{" "}
                              Nike
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="marca[]"
                                 value="puma"
                              />{" "}
                              Puma
                           </label>
                        </fieldset>

                        <fieldset>
                           <legend>Categoria</legend>
                           <label>
                              <input
                                 type="checkbox"
                                 name="categoria[]"
                                 value="esporte-e-lazer"
                              />{" "}
                              Esporte e Lazer
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="categoria[]"
                                 value="casual"
                              />{" "}
                              Casual
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="categoria[]"
                                 value="utilitario"
                              />{" "}
                              Utilitário
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="categoria[]"
                                 value="corrida"
                              />{" "}
                              Corrida
                           </label>
                        </fieldset>

                        <fieldset>
                           <legend>Gênero</legend>
                           <label>
                              <input
                                 type="checkbox"
                                 name="genero[]"
                                 value="masculino"
                              />{" "}
                              Masculino
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="genero[]"
                                 value="feminino"
                              />{" "}
                              Feminino
                           </label>
                           <label>
                              <input
                                 type="checkbox"
                                 name="genero[]"
                                 value="unisex"
                              />{" "}
                              Unisex
                           </label>
                        </fieldset>

                        <fieldset>
                           <legend>Estado</legend>
                           <label>
                              <input type="radio" name="estado" value="novo" />{" "}
                              Novo
                           </label>
                           <label>
                              <input type="radio" name="estado" value="usado" />{" "}
                              Usado
                           </label>
                        </fieldset>
                     </form>
                  </section>
               )}
               <div id="cards-products">
                  {productsCards.map((product, index) => (
                     <CardProduct
                        key={index}
                        category={product.category}
                        content={product.content}
                        current_price={product.current_price}
                        image={product.image}
                        price_off={product.price_off}
                        percentage_off={product.percentage_off}
                     />
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};

export default ProductListing;
