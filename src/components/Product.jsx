import React from 'react';

const Product = ({ product }) => {
  return (
    
    <figure className='flex-col gap-8 max-w-[200px] max-h-[300px] items-center'>
        <div className='imageContainer'>
            <img src={product.product.main_image} alt="" height={100} width={100} />
        </div>
        <div className='ProductDetails flex-wrap w-[300px] h-auto'>
            <h2 className="font-bold text-[#333333] text-[16px] tracking-[0] leading-[24px] w-[200px] h-[50px] overflow-hidden">
                {product.product.title}
            </h2>
            <h3 className='mt-5'>{product.offers.primary.price}</h3>
        </div>
    </figure>

  )
}

export default Product;