import React from 'react';
import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();

  return (
    <h1>Produto {query.produtoId}</h1>
  )
}

export default Product;
