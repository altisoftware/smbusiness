import React from "react";
import { useDispatch } from "react-redux";
// internal
import { Filter } from "@/svg";
import NiceSelect from "@/ui/nice-select";
import {handleFilterSidebarOpen } from "@/redux/features/shop-filter-slice";

const ShopTopRight = ({selectHandleFilter}) => {
  const dispatch = useDispatch()
  return (
    <div className="tp-shop-top-right d-sm-flex align-items-center justify-content-xl-end">
      <div className="tp-shop-top-select">
        <NiceSelect
          options={[
            { value: "Default Sorting", text: "Tri par défaut" },
            { value: "Low to High", text: "Prix le moins élevé au plus" },
            { value: "High to Low", text: "Prix le plus élevé au moins" },
            { value: "New Added", text: "Nouveau Ajout" },
            { value: "On Sale", text: "Epuisé" },
          ]}
          defaultCurrent={0}
          onChange={selectHandleFilter}
          name="Default Sorting"
        />
      </div>
      <div className="tp-shop-top-filter">
        <button onClick={()=> dispatch(handleFilterSidebarOpen())} type="button" className="tp-filter-btn">
          <span>
            <Filter />
          </span>
          {" "}Filter
        </button>
      </div>
    </div>
  );
};

export default ShopTopRight;
