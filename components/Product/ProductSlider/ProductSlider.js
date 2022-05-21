import Image from 'next/image';
import React, { useState, useRef, useEffect } from 'react';
import * as S from './ProductSlider.styles';

const ProductSlider = ({ photos, children }) => {
  const [currentSlider, setCurrentSlider] = useState(0);
  const photosRef = useRef();
  const dotsRef = useRef();

  const handleClick = ({ target }) => {
    setCurrentSlider(Number(target.innerText));

    Array.from(dotsRef.current.children).forEach(dot => dot.classList.remove('active'));
    target.classList.add('active');
  }

  useEffect(() => {
    const photosArr = Array.from(photosRef.current.children);
    photosArr.forEach(photo => photo.classList.remove('show'));
    photosArr[currentSlider].classList.add('show');
  }, [currentSlider])

  useEffect(() => {
    Array.from(dotsRef.current.children)[0].classList.add('active');
  }, [])
  
  return (
    <S.ProductSliderContainer>
      <S.SliderArea ref={photosRef}>
        {photos.map(({ title, src }) => (
          <Image key={title} src={src} alt={title} />
        ))}
      </S.SliderArea>

      <S.SliderController ref={dotsRef}>
        {photos.map(({ title }, index) => (
          <span onClick={handleClick} key={title}>{index}</span>
        ))}
      </S.SliderController>
      {children}
    </S.ProductSliderContainer>
  )
}

export default ProductSlider;
