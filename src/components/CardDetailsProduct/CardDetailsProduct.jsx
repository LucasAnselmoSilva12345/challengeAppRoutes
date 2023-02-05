import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Head } from '../Head';

import {
  Section,
  BoxImage,
  BoxDescriptionImage,
  TextTitle,
  TextPrice,
  TextDescription,
} from './cardDetailsProduct.js';

export function CardDetailsProduct() {
  const [erro, setErro] = useState(null);
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const urlFetchDetailsOfProject = `https://ranekapi.origamid.dev/json/api/produto/${id}`;

  useEffect(() => {
    async function fetchDataOfProduct(url) {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        setErro(error);
      }
    }
    fetchDataOfProduct(urlFetchDetailsOfProject);
  }, [id]);

  if (!product || erro) {
    return <p>{erro}</p>;
  }

  return (
    <Section>
      <Head title={`${product.nome}`} />

      <BoxImage>
        {product.fotos.map((foto) => (
          <img
            className="w-1/5"
            key={foto.src}
            src={foto.src}
            alt={foto.titulo}
          />
        ))}
      </BoxImage>

      <BoxDescriptionImage>
        <TextTitle>{product.nome}</TextTitle>
        <TextPrice>{product.preco}</TextPrice>
        <TextDescription>{product.descricao}</TextDescription>
      </BoxDescriptionImage>
    </Section>
  );
}
