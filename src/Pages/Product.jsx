import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Head } from '../components/Head';

export function Product() {
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
    <section className="container mx-auto px-1">
      <Head title={`${product.nome}`} />

      <div className="flex gap-2">
        {product.fotos.map((foto) => (
          <img
            className="w-1/5"
            key={foto.src}
            src={foto.src}
            alt={foto.titulo}
          />
        ))}
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold text-violet-700 mb-2">
          {product.nome}
        </h1>
        <span className="bg-violet-700 p-2 rounded-lg text-white font-semibold">
          {product.preco}
        </span>
        <p className="w-2/5 mt-4 text-zinc-400">{product.descricao}</p>
      </div>
    </section>
  );
}
