import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

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
    <section>
      {products.map((produto) => (
        <Link to={`produto/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo} />
          <h1>{produto.nome}</h1>
          <p>{produto.descricao}</p>
        </Link>
      ))}
    </section>
  );
}
