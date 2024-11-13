import React from "react";
import "./Homepage.css";
import Carousel from "../../components/Carousel/Carousel";
import CardCollection from "../../components/CardCollection/CardCollection";
import CardCategory from "../../components/CardCategory/CardCategory";
import Shirt from "../../icons/Shirt";
import Pants from "../../icons/Pants";
import Cap from "../../icons/Cap";
import Headphone from "../../icons/Headphone";
import Tennis from "../../icons/Tennis";
import LineRight from "../../icons/LineRight";
import CardProduct from "../../components/CardProduct/CardProduct";
import Button from "../../components/Button/Button";

const Homepage = () => {
   const contentCardsCollection = [
      { image: "./assets/collection-1.png", content: "Novo drop supreme" },
      { image: "./assets/collection-2.png", content: "Coleção Adidas" },
      { image: "./assets/collection-3.png", content: "Novo Beats Bass" },
   ];

   const contentCardsCategory = [
      { image: <Shirt />, content: "Camisetas" },
      { image: <Pants />, content: "Calças" },
      { image: <Cap />, content: "Bonés" },
      { image: <Headphone />, content: "Headphones" },
      { image: <Tennis />, content: "Tênis" },
   ];

   const productsCardsProducts = [
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
      <section id="homepage">
         <div id="center-carousel">
            <Carousel />
         </div>

         {/* Coleções */}
         <section id="collection-section">
            <h4>Coleção em destaque</h4>
            <div id="cards-collection">
               {contentCardsCollection.map((card, index) => (
                  <CardCollection
                     key={index}
                     background={card.image}
                     off={30}
                     content={card.content}
                  />
               ))}
            </div>
         </section>

         {/* Categorias */}
         <section id="category-section">
            <h4>Coleções em destaque</h4>
            <div id="cards-category">
               {contentCardsCategory.map((card, index) => (
                  <CardCategory
                     key={index}
                     image={card.image}
                     content={card.content}
                  />
               ))}
            </div>
         </section>

         {/* Produtos em alta */}
         <section id="products-section">
            <div id="div-title">
               <h4>Produtos em alta</h4>
               <button>
                  Ver todos <LineRight />{" "}
               </button>
            </div>
            <div id="cards-products">
               {productsCardsProducts.map((product, index) => (
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
         </section>

         {/* Oferta especial */}
         <section id="collector-edition-section">
            <div id="image-air-jordan"></div>
            <div id="content-collector-edition">
               <p id="special-offer">oferta especial</p>
               <h4>Air Jordan edição de colecionador</h4>
               <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip
               </p>
               <Button content="Ver oferta" type="primary" />
            </div>
         </section>
      </section>
   );
};

export default Homepage;
