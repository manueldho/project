import React from "react";
import { useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
import { selectFilteredProducts } from "../redux/slices/productSlice";
import { RootState } from "../redux/store";
import '../styles/ProductsList.css';

const ProductsList = () => {
    const { category } = useParams<{ category?: string }>();
    const filteredProducts = useSelector((state: RootState) => selectFilteredProducts(state, category));

    return (
        <div className="p-16 mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2"> {/* Adjusted gap here */}
            {filteredProducts ? filteredProducts.map(product => (
                <Link to={`/product/${product.id}`} key={product.id} className="no-underline">
                    <div className="product-card">
                        <img src={product.image} alt={product.title} className="product-image" />
                        <h3 className="product-title">{product.title}</h3>
                        <p className="product-price">${product.price}</p>
                    </div>
                </Link>
            )) : <div>Loading...</div> }
        </div>
    );
}

export default ProductsList;
