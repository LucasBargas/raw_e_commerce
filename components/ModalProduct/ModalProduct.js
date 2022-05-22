import React, { useContext } from 'react';
import { UserContext } from "../../utils/Context";
import products from '../../utils/products';
import * as S from './ModalProduct.styles';
import { IoClose } from 'react-icons/io5';
import ProductDatas from '../ProductDatas/ProductDatas';
import ProductSlider from '../ProductSlider/ProductSlider';

const ModalProduct = () => {
  const { idRef, setIdRef } = useContext(UserContext);

  const closeModal = () => setIdRef(undefined);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) closeModal();
  }

  return (
    <S.ModalContainer onClick={handleOutsideClick}>
      {products.filter(p => p.id === idRef ).map(p => (
        <S.ModalArea key={p.product}>
          <S.CloseModal>
            <button onClick={() => closeModal()}><IoClose /></button>
          </S.CloseModal>

          <S.ModalProductArea>
            <ProductSlider photos={p.photos} />
            <ProductDatas datas={p} moreInfo={true} />
          </S.ModalProductArea>
        </S.ModalArea>
      ))}
    </S.ModalContainer>
  )
}

export default ModalProduct;
