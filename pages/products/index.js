import useSWR from "swr";

export default function ProductPage() {
  const { data: products, isLoading, error } = useSWR("/api/products");

  if (isLoading) {
    return <h1>Loading fishes ...</h1>;
  }

  if (error) {
    return <h1>Ups somethoing went wrong</h1>;
  }

  return (
    <>
      <ul>
        {products?.map(({ id, name }) => {
          return <li key={id}>{name}</li>;
        })}
      </ul>
    </>
  );
}
