import React from "react";
import { useRouter } from "next/router";
import { useDispatch } from "react-redux";
import { handleFilterSidebarClose } from "@/redux/features/shop-filter-slice";

const StatusFilter = ({setCurrPage,shop_right=false}) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const status = [{
    "name": "On sale",
    "label": "Epuisé"
  }, {
    "name": "In Stock",
    "label": "Disponible"
  }];

  // handle status route 
  const handleStatusRoute = (status) => {
    setCurrPage(1)
    router.push(
      `/${shop_right?'shop-right-sidebar':'shop'}?status=${status.name
        .toLowerCase()
        .replace("&", "")
        .split(" ")
        .join("-")}`
        )
      dispatch(handleFilterSidebarClose())
  }
  return (
    <div className="tp-shop-widget mb-50">
      <h3 className="tp-shop-widget-title">Statut des produits</h3>
      <div className="tp-shop-widget-content">
        <div className="tp-shop-widget-checkbox">
          <ul className="filter-items filter-checkbox">
            {status.map((s, i) => (
              <li key={i} className="filter-item checkbox">
                <input
                  id={s}
                  type="checkbox"
                  checked={
                    router.query.status ===
                    s.name.toLowerCase().replace("&", "").split(" ").join("-")
                      ? "checked"
                      : false
                  }
                  readOnly
                />
                <label
                  onClick={() => handleStatusRoute(s)}
                  htmlFor={s}
                >
                  {s.label}
                </label>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StatusFilter;
