import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { fetchProducts, selectFilteredProducts } from "../redux/slices/productSlice";


const Home = () => {
  const dispatch = useDispatch();
  const filteredProducts = useSelector((state: RootState) => selectFilteredProducts(state, undefined));

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const adImgUrl = [
    '/images/img1.jpg',
    '/images/img2.jpg',
    '/images/img3.jpg',
    '/images/img4.jpg'
  ]

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);


  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImgIndex(prevIndex => (prevIndex + 1) % adImgUrl.length);
    }, 5000);

    return () => clearInterval(interval)
  }, [adImgUrl.length])

  return (
    <div className="p-6 mt-20">
      <div className="relative bg-cover bg-center h-96 rounded-lg overflow-hidden shadow-lg" style={{ backgroundImage: `url(${adImgUrl[currentImgIndex]})` }}>
        <div className="absolute inset-0">
          {adImgUrl.map((url, index) => (
            <img
              key={index}
              src={url}
              alt={`Ad Image ${index}`}
              className={`absolute inset-0 object-cover transition-opacity duration-1000 ${index === currentImgIndex ? 'opacity-100' : 'opacity-0'}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-gray-100 via-white to-gray-100 p-8 rounded-lg shadow-2xl">
        <h2 className="text-4xl font-extrabold mb-6 text-center text-gray-800">Popular Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts  ? filteredProducts.slice(0, 6).map(product => (
            <div key={product.id} className="bg-white border border-gray-200 p-6 rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover mb-4 rounded" />
              <h3 className="product-title text-2xl font-bold mb-2 text-gray-700">{product.title}</h3>
              <p className="text-lg text-gray-600 mb-4">${product.price}</p>
            </div>
          )) : <div>Loading...</div>}
        </div>
      </div>
    </div>
  );
};

export default Home;
