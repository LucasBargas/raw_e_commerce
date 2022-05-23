import React, { useEffect, useState } from 'react';
import * as S from './Modal.styles';
import { IoCloseSharp } from 'react-icons/io5';

const Modal = () => {
  const [modal, setModal] = useState(true);

  const handleOutsideClick = ({ target, currentTarget }) => {
    if (target === currentTarget) setModal(false);
  }

  useEffect(() => {
    document.body.style.overflow = modal ? 'hidden' : 'auto';
  }, [modal]); 

  return (
    <S.ModalContainer modal={modal} onClick={handleOutsideClick}>
      <S.ModalArea>
        <S.ButtonClose>
          <button onClick={() => setModal(false)}>
            <IoCloseSharp />
          </button>
        </S.ButtonClose>
        <S.ModalContent>
          <h2>Lucas Bargas - Raw</h2>
          <p><strong>Nota:</strong> Esta aplicação web é uma réplica desenvolvida por <a href="https://projetoslucasbargas.com/" target="_blank" rel="noopener noreferrer">Lucas Bargas</a> com base em um layout encontrado na web. Porém, toda a codificação é própria.</p>

          <S.LinkToGithub href="https://github.com/LucasBargas/raw-e-commerce" target="_blank" rel="noopener noreferrer">Clique aqui para visualizar o Repositório no GitHub</S.LinkToGithub>

          <div>
            <S.ViewButton onClick={() => setModal(false)}>
              Visualizar projeto
            </S.ViewButton>
          </div>
        </S.ModalContent>
      </S.ModalArea>
    </S.ModalContainer>
  )
}

export default Modal;
