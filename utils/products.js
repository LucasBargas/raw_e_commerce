import product1 from '../public/images/products/product_1.png';
import product2 from '../public/images/products/product_2.png';
import product3 from '../public/images/products/product_3.png';
import product4 from '../public/images/products/product_4.png';
import product5 from '../public/images/products/product_5.png';
import product6 from '../public/images/products/product_6.png';
import product7 from '../public/images/products/product_7.png';
import product8 from '../public/images/products/product_8.png';
import product9 from '../public/images/products/product_9.png';
import product10 from '../public/images/products/product_10.png';
import product11 from '../public/images/products/product_11.png';
import product12 from '../public/images/products/product_12.png';

import productHover1 from '../public/images/products/product_hover_1.png';
import productHover2 from '../public/images/products/product_hover_2.png';
import productHover3 from '../public/images/products/product_hover_3.png';
import productHover4 from '../public/images/products/product_hover_4.png';
import productHover5 from '../public/images/products/product_hover_5.png';
import productHover6 from '../public/images/products/product_hover_6.png';
import productHover7 from '../public/images/products/product_hover_7.png';
import productHover8 from '../public/images/products/product_hover_8.png';
import productHover9 from '../public/images/products/product_hover_9.png';
import productHover10 from '../public/images/products/product_hover_10.png';
import productHover11 from '../public/images/products/product_hover_11.png';
import productHover12 from '../public/images/products/product_hover_12.png';

const products = [
  {
    id: 0,
    sku: '001',
    product: 'Boné Raw Aba Reta - Um',
    price: 21.99,
    stock: 70,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Um - Foto Um',
        src: product1,
      },
      {
        title: 'Boné Raw Aba Reta - Um - Foto Dois',
        src: productHover1,
      }
    ]
  },
  {
    id: 1,
    sku: '002',
    product: 'Boné Raw Aba Reta - Dois',
    price: 23.99,
    stock: 67,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Dois - Foto Um',
        src: product2,
      },
      {
        title: 'Boné Raw Aba Reta - Dois - Foto Dois',
        src: productHover2,
      }
    ]
  },
  {
    id: 2,
    sku: '003',
    product: 'Boné Raw Aba Reta - Três',
    price: 22.99,
    stock: 54,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Três - Foto Um',
        src: product3,
      },
      {
        title: 'Boné Raw Aba Reta - Três - Foto Dois',
        src: productHover3,
      }
    ]
  },
  {
    id: 3,
    sku: '004',
    product: 'Boné Raw Aba Reta - Quatro',
    price: 26.99,
    stock: 70,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Quatro - Foto Um',
        src: product4,
      },
      {
        title: 'Boné Raw Aba Reta - Quatro - Foto Dois',
        src: productHover4,
      }
    ]
  },
  {
    id: 4,
    sku: '005',
    product: 'Boné Raw Aba Reta - Cinco',
    price: 23.99,
    stock: 85,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Cinco - Foto Um',
        src: product5,
      },
      {
        title: 'Boné Raw Aba Reta - Cinco - Foto Dois',
        src: productHover5,
      }
    ]
  },
  {
    id: 5,
    sku: '006',
    product: 'Boné Raw Aba Reta - Seis',
    price: 21.99,
    stock: 62,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Seis - Foto Um',
        src: product6,
      },
      {
        title: 'Boné Raw Aba Reta - Seis - Foto Dois',
        src: productHover6,
      }
    ]
  },
  {
    id: 6,
    sku: '007',
    product: 'Boné Raw Aba Reta - Sete',
    price: 24.99,
    stock: 74,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Sete - Foto Um',
        src: product7,
      },
      {
        title: 'Boné Raw Aba Reta - Sete - Foto Dois',
        src: productHover7,
      }
    ]
  },
  {
    id: 7,
    sku: '008',
    product: 'Boné Raw Aba Reta - Oito',
    price: 24.99,
    stock: 77,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Oito - Foto Um',
        src: product8,
      },
      {
        title: 'Boné Raw Aba Reta - Oito - Foto Dois',
        src: productHover8,
      }
    ]
  },
  {
    id: 8,
    sku: '009',
    product: 'Boné Raw Aba Reta - Nove',
    price: 21.99,
    stock: 90,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Nove - Foto Um',
        src: product9,
      },
      {
        title: 'Boné Raw Aba Reta - Nove - Foto Dois',
        src: productHover9,
      }
    ]
  },
  {
    id: 9,
    sku: '0010',
    product: 'Boné Raw Aba Reta - Dez',
    price: 25.99,
    stock: 88,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Dez - Foto Um',
        src: product10,
      },
      {
        title: 'Boné Raw Aba Reta - Dez - Foto Dois',
        src: productHover10,
      }
    ]
  },
  {
    id: 10,
    sku: '0011',
    product: 'Boné Raw Aba Reta - Onze',
    price: 22.99,
    stock: 55,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Onze - Foto Um',
        src: product11,
      },
      {
        title: 'Boné Raw Aba Reta - Onze - Foto Dois',
        src: productHover11,
      }
    ]
  },
  {
    id: 11,
    sku: '0012',
    product: 'Boné Raw Aba Reta - Doze',
    price: 25.99,
    stock: 90,
    photos: [
      {
        title: 'Boné Raw Aba Reta - Doze - Foto Um',
        src: product12,
      },
      {
        title: 'Boné Raw Aba Reta - Doze - Foto Dois',
        src: productHover12,
      }
    ]
  },
]

export default products;
