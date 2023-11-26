import { memo } from "react";
import { Item } from "../Item/Item";
import "../ItemList/ItemList.css";

export const ItemList = memo(({ products }) => {
  return (
    <div className="container-fluid" id="itemList">
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  );
});
