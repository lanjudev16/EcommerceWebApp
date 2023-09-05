import React, { useEffect, useState } from 'react';
import SingleProduct from './SingleProduct/SingleProduct';

const Shop = () => {
    // api data loading
    const url='https://dummyjson.com/products'
    // react useState hook
    const [data,setData]=useState([])
    // load data form api
    useEffect(()=>{
        fetch(url).then(res=>res.json()).then(data=>setData(data.products))
    },[])
    console.log(data)
    return (
        <div className='grid mt-5 mx-5 lg:grid-cols-6 gap-5'>
            {
                data.map((singleProduct,index)=><SingleProduct key={index}  singleProduct={singleProduct}></SingleProduct>)
            }
        </div>
    );
};

export default Shop;