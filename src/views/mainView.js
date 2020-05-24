import React from "react";
import Billboard from "../components/Billboard/Billboard";
import SubBillboard from "../components/Billboard/SubBillboard";
import Products from "../components/DesktopProduct/Products";
import ProductImage from "../components/DesktopProduct/ProductImage";
import CellphoneProduct from "../components/CellphoneProduct/CellphoneProduct";
import Header from "../components/Header/Header";
import HeaderTwo from "../components/Header/HeaderTwo";
import MainColumns from "../components/MainThreeColumns/MainColumns";

export default function mainView() {
  return (

    <>

    
      <Header />
      <Billboard />
      <MainColumns />

      <Products />

    </>
  );
}
