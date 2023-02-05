import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import {
  ContainerCardProduct,
  BoxProduct,
  NameProduct,
  DescriptionProduct,
} from '../styles/cardProduct.js';

export function CardProduct() {
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  if (products === null) {
    return null;
  }

  return (
    <ContainerCardProduct>
      {products.map((produto) => (
        <BoxProduct key={produto.id}>
          <Link to={`product/${produto.id}`}>
            <img
              className="mb-2"
              src={produto.fotos[0].src}
              alt={produto.fotos[0].titulo}
            />
            <NameProduct>{produto.nome}</NameProduct>
            <DescriptionProduct>{produto.descricao}</DescriptionProduct>
          </Link>
        </BoxProduct>
      ))}
    </ContainerCardProduct>
  );
}
