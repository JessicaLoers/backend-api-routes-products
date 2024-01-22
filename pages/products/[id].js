import useSWR from "swr";
import { useRouter } from "next/router";

export default function ProductDetailsPage() {
  const router = useRouter();
  const { id } = router.query;
  const { data: product, isLoading, error } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading fish ...</h1>;
  }

  if (error) {
    return <h1>Ups somethoing went wrong</h1>;
  }

  const { name, description, price, currency, category } = product;

  return (
    <artile>
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>
          {price} {currency}
        </li>
        <li>{category}</li>
      </ul>
    </artile>
  );
}
