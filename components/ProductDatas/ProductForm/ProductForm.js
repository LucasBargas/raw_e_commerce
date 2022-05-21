import React, { useState } from 'react';
import * as S from './ProductForm.styles';

const ProductForm = ({ datas }) => {
  const [amount, setAmount] = useState('1');
  const [select, setSelect] = useState('');

  return (
    <S.ProductFormContainer onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="sizes">Tamanhos</label>
      <select name="sizes" value={select} onChange={({ target }) => setSelect(target.value)} >
        <option value="Pequeno">Pequeno</option>
        <option value="Médio">Médio</option>
        <option value="Grande">Grande</option>
      </select>

      <label htmlFor="amount">Quantidade</label>
      <input name='amount' onChange={({ target }) => setAmount(target.value)} type="number" value={amount} min="1" max={`${datas.stock}`} />

      <button>Adicionar ao carrinho</button>
    </S.ProductFormContainer>
  )
}

export default ProductForm;
