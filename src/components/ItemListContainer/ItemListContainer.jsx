import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import { ItemList } from "../ItemList/ItemList";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { cid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryCollection = collection(dbFirestore, "products");

    const queryFilter = cid
      ? query(queryCollection, where("category", "==", cid))
      : queryCollection;
    getDocs(queryFilter)
      .then((res) =>
        setProducts(
          res.docs.map((products) => ({
            id: products.id,
            ...products.data(),
          }))
        )
      )
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  }, [cid]);

  return <>{loading ? <Loading /> : <ItemList products={products} />}</>;
}

export default ItemListContainer;
