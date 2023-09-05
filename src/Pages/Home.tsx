import { Head } from '../components/Head';

import { CardProduct } from '../components/CardProduct/CardProduct';

export function Home() {
  return (
    <section>
      <Head title="Home" />

      <CardProduct />
    </section>
  );
}
