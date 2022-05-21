import Head from 'next/head';
import { useRouter } from "next/router";

const Product = () => {
  const { query } = useRouter();

  return (
    <>
    <Head>
      <title>Projetos Lucas Bargas - Raw | Loja | Produto {query.produtoId}</title>
      <meta name="description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={`Projetos Lucas Bargas - Raw | Loja | Produto ${query.produtoId}`} />
      <meta property="og:description" content="Esta aplicação é uma réplica desenvolvida por Lucas Bargas, com o objetivo de praticar o framework NextJS em conjunto com o Styled Components." />
      <meta property="og:url" content={`https://raw-lucasbargas.vercel.app/loja/produto/${query.produtoId}`} />
    </Head>

    <>
      <h1>Produto {query.produtoId}</h1>
    </>
 </>
  )
}

export default Product;
