import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function CategoriesHeader() {
  const [btnName, setBtnName] = useState("All");

  const navigate = useNavigate();

  const handleBtnName = (e, path) => {
    setBtnName(e);
    navigate(path);
  };

  return (
    <>
      <div className="container">
        <div className="catego-header">
          <div className="title-home">
            <Link onClick={() => window.scrollTo(0, 0)} to="/">
              <i className="fa-solid fa-angle-left"></i> Home
            </Link>
            <h3>{btnName}</h3>
          </div>
          <div className="filter-btns">
            <button onClick={() => handleBtnName("All", "/categories/all")}>
              All
            </button>
            <button onClick={() => handleBtnName("T-Shirts", "/categories/T-Shirts")}>
              T-Shirts
            </button>
            <button onClick={() => handleBtnName("Sweaters", "/categories/Sweaters")}>
              Sweaters
            </button>
            <button onClick={() => handleBtnName("Accessories", "/categories/Accessories")}>
              Accessories
            </button>
            <button onClick={() => handleBtnName("Hoodies", "/categories/Hoodies")}>
              Hoodies
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default CategoriesHeader;
