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
    <section class='text-gray-700 body-font'>
      <div class='container px-5 py-24 mx-auto'>
        <div class='flex flex-wrap -m-4'>
          <div class='p-4 md:w-1/3'>
            <div class='h-full border-2 border-gray-200 rounded-lg overflow-hidden'>
              <img
                class='lg:h-48 md:h-36 w-full object-cover object-center'
                src='https://dummyimage.com/720x400'
                alt='blog'
              />
              <div class='p-6'>
                <h2 class='tracking-widest text-xs title-font font-medium text-gray-500 mb-1'>
                  CATEGORY
                </h2>
                <h1 class='title-font text-lg font-medium text-gray-900 mb-3'>The Catalyzer</h1>
                <p class='leading-relaxed mb-3'>
                  Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing
                  tousled waistcoat.
                </p>
                <div class='flex items-center flex-wrap '>
                  <a class='text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0'>
                    Learn More
                    <svg
                      class='w-4 h-4 ml-2'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                    >
                      <path d='M5 12h14'></path>
                      <path d='M12 5l7 7-7 7'></path>
                    </svg>
                  </a>
                  <span class='text-gray-600 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-300'>
                    <svg
                      class='w-4 h-4 mr-1'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z'></path>
                      <circle cx='12' cy='12' r='3'></circle>
                    </svg>
                    1.2K
                  </span>
                  <span class='text-gray-600 inline-flex items-center leading-none text-sm'>
                    <svg
                      class='w-4 h-4 mr-1'
                      stroke='currentColor'
                      stroke-width='2'
                      fill='none'
                      stroke-linecap='round'
                      stroke-linejoin='round'
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z'></path>
                    </svg>
                    6
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
