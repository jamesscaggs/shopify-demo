import React from 'react';
import Product from './components/Product';

const ProductList2 = () => (
  <div className="Product__list">
   {map(Product, (product)=> (
     <div key={product.id} className='Product'>
       {props.product.images.edges.length ? (
         <img src={variantImage.src} alt={`${props.product.title} product shot`} />
       ) : null}
       <h5 className='Product__title'>{props.product.title}</h5>
       <span className='Product__price'>${variant.price}</span>
       {variantSelectors}
       <label className='Product__option'>
         Quantity
         <input
           min='1'
           type='number'
           defaultValue={variantQuantity}
           onChange={handleQuantityChange}
         ></input>
       </label>
       <button
         className='Product__buy button'
         onClick={() => props.addVariantToCart(variant.id, variantQuantity)}
       >
         Add to Cart
       </button>
     </div>
   ))}
  </div>
)

export default ProductList2;
