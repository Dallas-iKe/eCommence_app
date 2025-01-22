import React, { useContext, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../contexts/ShopContext';

const product = () => {

  const {productId} =useParams();
  console.log(productId);
  const {products} = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [image, setimage] = useState('');

  const fetchProductData = async () =>{
    products.map((item)=>{
      if (item._id === productId) {
        setProductData(item)
        setimage(item.image[0])
        return null;
      }
    })
  }

  useEffect(() =>{
    fetchProductData();
},[productId])

  return productData ? (
    <div className='border-t pt-10 transition-opacity ease-in duration-500 opacity-100'>
      {/* Product Data */}
      <div className='flex gap-12 sm:gap-12 flex-col sm:flex-row'>
        {/* Product Images */}
        <div className='flex-1 flex flex-col-reverse gap-3 sm:flex-row'>
          <div className='flex flex-col overflow-x-auto sm:overflow-y-scroll justify-between sm:justify-normal sm:w-[18.7%] w-full'>
            {
              productData.image.map((item, index)=>(
                <img onClick={()=>setimage(item)} src={item} key={index} className='w-[24%] sm:w-full sm:mb-3 flex-shrink-0  cursor-pointer' alt="" />
              ))
            }
          </div>
          <div className='w-full sm:w-[80%]'>
            <img className='w-full h-auto' src={image} alt="" />
          </div>
        </div>
      </div>
      
    </div>
  ) : <div className='opacity-0' ></div>
}

export default product
