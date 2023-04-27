import "../components/ProudProducts.css";
import CategoriesHeader from "../components/CategoriesHeader";
import { Route, Routes } from "react-router-dom";
import All from "../components/Categories-pages/All";
import Tshirts from "../components/Categories-pages/Tshirts";
import Sweaters from "../components/Categories-pages/Sweaters";
import Accessories from "../components/Categories-pages/Accessories";
import Hoodies from "../components/Categories-pages/Hoodies";

function Categories() {
  return (
    <>
      <CategoriesHeader />
      <Routes>
        <Route index path="all" element={<All />} />
        <Route path="t-shirts" element={<Tshirts />} />
        <Route path="sweaters" element={<Sweaters />} />
        <Route path="accessories" element={<Accessories />} />
        <Route path="hoodies" element={<Hoodies />} />
      </Routes>
    </>
  );
}

export default Categories;
