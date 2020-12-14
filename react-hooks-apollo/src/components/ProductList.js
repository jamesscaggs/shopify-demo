// // fetch all products
// // map over the products and render a <Product /> component
// import React, { useState } from "react";
// import gql from "graphql-tag";
// import Product from "Product";
//
// export default function ProductList({ collection }) {
//   // graphql query passing in the category
//
//   const collectionQuery = gql`
//     query {
//       collectionByHandle(handle: "Bundles") {
//        products(first: 250) {
//         edges {
//           node {
//            id
//            title
//            description
//            tags
//          }
//         }
//        }
//       }
//
//    }
//   `;
//
//   const { loading, error, data: products } = useQuery(collectionQuery);
//
//   if (loading) return "...loading";
//
//   if (error) return console.log(error.message);
//
//
//   // return (
//   //   // <div>
//   //   //   {data.map((product) => (;
//   //   //     <Product product={product} />
//   //   //   ))}
//   //   // </div>
//   // );
// }
//
// export default ProductList;
