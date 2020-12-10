// fetch all products
// map over the products and render a <Product /> component

export default function ProductList({ collection }) {
  // graphql query passing in the category
  const collectionQuery = gql`
    query {

    }
  `;

  const { loading, error, data: products } = useQuery(collectionQuery);

  if (loading) return "...loading";

  if (error) return console.log(error.message);

  return (
    <div>
      {data.map((product) => (
        <Product product={product} />
      ))}
    </div>
  );
}
