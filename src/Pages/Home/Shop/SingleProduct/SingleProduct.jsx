import React, { useContext, useState } from 'react';
import { CartContext } from '../../../../Provider/MyCartProvider';

const SingleProduct = ({singleProduct}) => {
    const {product,setProduct}=useContext(CartContext)
    const {title,description,price,discountPercentage,rating,stock,brand,category,thumbnail,images}=singleProduct
    const handlerCart=(pd)=>{
      const  newPd=[...product,pd]
      setProduct(newPd)
    }
    return (
        <div className='shadow bg-white rounded px-5 py-3'>
            <img src={thumbnail} className='h-[150px] w-full object-cover' alt="" />
            <h1 className='text-black '>{description.slice(0,15)}...</h1>
            <h3 className='text-black font-bold text-xl'>${price}</h3>
            <button className='bg-red-300 px-2 rounded-md mt-3 text-white py-2 text-base' onClick={()=>handlerCart(singleProduct)} >Add to Cart</button>
        </div>
    );
};

export default SingleProduct;