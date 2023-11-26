import { useParams } from "react-router-dom";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { useEffect, useState } from "react";
import ItemDetail from "../ItemDetail/ItemDetail";

export const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const { pid } = useParams();

  useEffect(() => {
    const dbFirestore = getFirestore();
    const queryDoc = doc(dbFirestore, "products", pid);
    getDoc(queryDoc)
      .then((res) => setProduct({ id: res.id, ...res.data() }))
      .catch((err) => console.log(err));
  }, []);

  return <ItemDetail product={product} />;
};
