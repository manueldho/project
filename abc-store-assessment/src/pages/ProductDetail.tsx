import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { selectProduct, selectSelectedProduct } from "../redux/slices/productSlice";
import {  addItem } from '../redux/slices/cartSlice';
import { RootState } from "../redux/store";
import '../styles/ProductDetails.css';

const ProductDetail = () => {

    const { productId } = useParams<{ productId: string }>();
    const dispatch = useDispatch();
    const selectedProduct = useSelector((state: RootState) => selectSelectedProduct(state));

    useEffect(() => {
        dispatch(selectProduct(Number(productId)));
    }, [dispatch, productId]);

    if (!selectedProduct) {
        return <div>Loading...</div>;
    }

    const handleAddToCart = () => {
        if(selectedProduct) {
            dispatch(addItem(selectedProduct));
        }
    }

    return (
        <div className="p-16 mt-20 product-detail-container">
            <div className="product-detail-image">
                <img src={selectedProduct.image} alt={selectedProduct.title} />
            </div>
            <div className="product-detail-info">
                <h2>{selectedProduct.title}</h2>
                <p>{selectedProduct.description}</p>
                <p>Rating: {selectedProduct.rating.rate} ({selectedProduct.rating.count} reviews)</p>
                <p>Price: ${selectedProduct.price}</p>
                <button onClick={handleAddToCart}>Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductDetail;