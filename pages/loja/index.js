import React, {useContext} from 'react';
import Head from "next/head";
import NewProducts from "../../components/NewProducts/NewProducts";
import { UserContext } from '../../utils/Context';
import ModalProduct from '../../components/ModalProduct/ModalProduct';
import AllProducts from '../../components/AllProducts/AllProducts';

const Shop = () => {
  const { idRef } = useContext(UserContext);

  return (
   <>
      <Head>
        <title>Projetos Lucas Bargas - Raw | Loja</title>
        <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Lucas Bargas - Raw - Loja" />
        <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
        <meta property="og:url" content="https://raw-lucasbargas.vercel.app/loja" />
      </Head>

      <>
        <NewProducts />
        <AllProducts />
        {idRef !== undefined && <ModalProduct />}
      </>
   </>
  )
}

export default Shop;
