import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import './singleProduct.css'
import { addToCart } from '../../slices/cart/cartslice';
import { addCartAsync } from '../../slices/cart/cartslice';
import {
  fetchSingleProductAsync,
  selectSingleProduct,
  chooseSize
} from '../../slices/products/singleProductSlice';
import { me } from '../Auth/authSlice';

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const user = useSelector((state) => state.auth.me);

  const product = useSelector(selectSingleProduct);
  const { name, description, price, quantity, imageUrl } = product;
  // console.log("single",singleProduct);

  const addToUserCart = async (product) => {
    let quantity = 1;
    let cartId = user.cartId;
    let productId = product.id;
    let name = product.name;
    let price = product.price;
    dispatch(addCartAsync({ quantity, cartId, productId, name, price}));
  };

  useEffect(() => {
    dispatch(fetchSingleProductAsync(id));
  }, []);

  
  
  return (
    <div className="single_product">
        <div className="single_product_name">
          <p>{name}</p>
        </div>
        <p>{description}</p>
        <p className="single_product_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <p>{quantity}</p>
      <img id='single_image' src={imageUrl} alt="BLANK" />
      <button onClick={() => dispatch(addToCart(product))}>Add to Basket</button>
      {/* <button onClick={handleAddToCart}>Add to Basket</button> */}

    </div>

// return(
//   <div id="singProdDiv">
//       <img id="singProdImg" src={product.imageUrl} />
//       <ul id="singProdUl">
//           <li>
//               <p id="sneakTitle">{product.name}</p>
//               </li>
//               <li>
//               <p id="price">${product.price}</p>
//               </li>
//               <li>
//               <p id="sizeText">Sizes</p>
//               </li>
//               <li id="sizBtnLi">
//                   {sizeArr.map(currSize => {
// // Mapping over sizeArr(written above) to create button for each size 
//                       return <button key={currSize} onClick={ () => dispatch(chooseSize(currSize))}  className={(currSize == product.size) ? 'sizeBtns selected' : 'sizeBtns'} type="button">{currSize}</button>
//                   })}
//               </li>
//               <li>
//                   <button  id="cartBtn" onClick={() => dispatch(addToCart(product))}>Add to cart</button>
//               </li>
//           <li>
//               <p className="prodDetail">Details</p>
//                   <p className="prodDetail">{product.description}</p>
//           </li>
//       </ul>
//   </div>

)
} 

export default SingleProduct  
