import React, { useState } from "react";

import VariantSelector from "./VariantSelector";

function Product(props) {
  const { product } = props;
  let defaultOptionValues = {};

  props.product.options.forEach((selector) => {
    defaultOptionValues[selector.name] = selector.values[0];
  });

  const [selectedOptions, setSelectedOptions] = useState(defaultOptionValues);

  const [variantImage, setVariantImage] = useState(props.product.images.edges[0].node);
  const [variant, setVariant] = useState(props.product.variants.edges[0].node);
  const [variantQuantity, setVariantQuantity] = useState(1);

  const findImage = (images, variantId) => {
    const primary = images[0];

    const image = images.filter(function (image) {
      return image.variant_ids.includes(variantId);
    })[0];

    return (image || primary).src;
  };

  const handleOptionChange = (event) => {
    const target = event.target;
    selectedOptions[target.name] = target.value;

    const selectedVariant = props.product.variants.edges.find((variant) => {
      return variant.node.selectedOptions.every((selectedOption) => {
        return selectedOptions[selectedOption.name] === selectedOption.value;
      });
    }).node;

    setVariant(selectedVariant);
    setVariantImage(selectedVariant.image);
  };

  const handleQuantityChange = (event) => {
    setVariantQuantity(event.target.value);
  };

  let variantSelectors = props.product.options.map((option) => {
    return (
      <VariantSelector
        handleOptionChange={handleOptionChange}
        key={option.id.toString()}
        option={option}
      />
    );
  });

  return (

    <div className="max-w-sm rounded overflow-hidden shadow-lg">
    <div className='Product'>
      {props.product.images.edges.length ? (
        <img className="w-full" src={variantImage.src} alt={`${props.product.title} product shot`} />
      ) : null}
      <h5 className='Product__title font-bold text-black-500 text-xl mb-2'>{props.product.title}</h5>
      <div className="text-gray-900 text-base">
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
        className='Product__buy button flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0'
        onClick={() => props.addVariantToCart(variant.id, variantQuantity)}
      >
        Add to Cart
      </button>
      </div>
    </div>
  </div>
  );
}

export default Product;
