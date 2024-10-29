import React, { useState } from "react";
import "./Header.css";
import TemporaryDrawer from "../Drawer/Drawer";
import { Badge, useMediaQuery } from "@mui/material";
import ShoppingCart from "../../icons/ShoppingCart";
import Search from "../../icons/Search";
import Button from "../Button/Button";

const Header = () => {
   const [openSearch, setOpenSearch] = useState(false);
   const isMobile = useMediaQuery("(max-width: 850px)");

   const handleSearchClick = () => {
      setOpenSearch((prev) => !prev);
   };

   return (
      <>
         {isMobile ? (
            <header
               id="header-mobile"
               style={{ height: openSearch ? "150px" : "8vh" }}
            >
               <TemporaryDrawer />
               <img
                  src="/assets/icons/logo-header.svg"
                  alt="Logo Digital Store"
                  id="img-logo-header"
               />
               <div id="div-cart">
                  <div onClick={handleSearchClick}>
                     <Search color="var(--primary)" />
                  </div>
                  <Badge badgeContent={4} color="error">
                     <ShoppingCart color="var(--primary)" />
                  </Badge>
               </div>
               {openSearch && (
                  <div id="input-search-mobile">
                     <input type="text" placeholder="Pesquisar" />
                     <Search color="var(--dark-gray-2)" />
                  </div>
               )}
            </header>
         ) : (
            <header id="header-desktop">
               <img
                  src="/assets/icons/logo-header.svg"
                  alt="Logo Digital Store"
                  id="img-logo-header"
               />
               <div id="input-search-mobile">
                  <input type="text" placeholder="Pesquisar" />
                  <Search color="var(--dark-gray-2)" />
               </div>
               <div id="div-buttons-desktop">
                  <div>
                     <Button width="100px" content="entrar" type="primary" />
                     <Button content="Cadastre-se" type="secondary" />
                  </div>
                  <Badge badgeContent={4} color="error">
                     <ShoppingCart
                        color="var(--primary)"
                     />
                  </Badge>
               </div>
            </header>
         )}
      </>
   );
};

export default Header;
