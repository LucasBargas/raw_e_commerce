import React, { useContext } from 'react';
import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();

  return (
    <div>Produto {query.produtoId}</div>
  )
}

export default Product;
