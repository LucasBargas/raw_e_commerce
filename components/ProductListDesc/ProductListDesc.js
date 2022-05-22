import * as S from './ProductListDesc.styles';

const ProductListDesc = () => {
  const handleClick = ({ target }) => {
    target.closest('li.list').classList.toggle('active');
  }

  return (
    <S.ProductListDescArea>
      <S.ProductList className='list'>
        <S.ProductListTitle onClick={handleClick}>
          <h3>Informações do produto</h3>
        </S.ProductListTitle>
        <p>Sou uma informação do produto. Sou um ótimo lugar para adicionar informações sobre seu produto, como tamanho, material, cuidados especiais e instruções para limpeza. Escreva porque este produto é especial e como seus clientes podem se beneficiar dele. </p>
      </S.ProductList>

      <S.ProductList className='list'>
        <S.ProductListTitle onClick={handleClick}>
          <h3>Política de retorno e reembolso</h3>
        </S.ProductListTitle>
        <p>Política de retorno e reembolso. Sou um ótimo lugar para que seus clientes saibam o que fazer caso estejam insatisfeitos com a compra. Ter uma política de reembolso ou de retorno é uma ótima maneira de estabelecer a confiança e garantir que seus clientes podem comprar com segurança.</p>
      </S.ProductList>

      <S.ProductList className='list'>
        <S.ProductListTitle onClick={handleClick}>
          <h3>Informações de entrega</h3>
        </S.ProductListTitle>
        <p>Sou uma política de envio. Sou um ótimo lugar para adicionar mais informações sobre seus métodos de entrega, embalagens e custo. Ter uma política de entrega é uma ótima maneira de estabelecer confiança e garantir que seus clientes podem comprar com segurança.</p>
      </S.ProductList>
    </S.ProductListDescArea>
  )
}

export default ProductListDesc;
