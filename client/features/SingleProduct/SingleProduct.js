import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./singleProduct.css";
import { addToCart, addCartAsync } from "../../slices/cart/cartslice";
import {
  fetchSingleProductAsync,
  selectSingleProduct,
  chooseSize,
} from "../../slices/products/singleProductSlice";
import axios from "axios";

const SingleProduct = () => {
  const dispatch = useDispatch();
  const { id } = useParams();

  const isLoggedIn = useSelector((state) => !!state.auth.me.id);

  const user = useSelector((state) => state.auth.me);

  const product = useSelector(selectSingleProduct);

  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const addToUserCart = async (product) => {
    let quantity = 1;
    let cartId = user.cartId;
    let productId = product.id;
    console.log("product", productId);
    let name = product.name;
    let price = product.price;
    dispatch(addCartAsync({ quantity, cartId, productId, name, price }));
  };

  useEffect(() => {
    dispatch(fetchSingleProductAsync(id));
  }, [dispatch, id]);

  useEffect(() => {
    if (product) {
      setName(product.name);
      setDescription(product.description);
      setPrice(product.price);
      setQuantity(product.quantity);
      setImageUrl(product.imageUrl);
    }
  }, [product]);

  if (!product) return null;

  // For Size Buttons
  const sizeArr = [];
  let n = 5;
  while (n <= 12.5) {
    sizeArr.push(n);
    n = n + 0.5;
  }

  return (
    <div id="singProdDiv">
      <img id="singProdImg" src={product.imageUrl} />
      <ul id="singProdUl">
        <li>
          <p id="sneakTitle">{product.name}</p>
        </li>
        <li>
          <p id="sneakPrice">${product.price}</p>
        </li>
        <li>
          <p id="sneakSize">Select Sizes</p>
        </li>
        <li>
          {sizeArr.map((currSize) => {
            return (
              <button
                key={currSize}
                onClick={() => dispatch(chooseSize(currSize))}
                className={
                  currSize == product.size ? "sizeBtns selected" : "sizeBtns"
                }
                type="button"
              >
                {currSize}
              </button>
            );
          })}
        </li>

        {isLoggedIn ? (
          <li className="cartBtnLi">
            <button className="cartBtn" onClick={() => addToUserCart(product)}>
              Add to Bag
            </button>
          </li>
        ) : (
          <li className="cartBtnLi">
            <button className="cartBtn" onClick={() => dispatch(addToCart(product))}>
              Add to Bag
            </button>
          </li>
        )}
        <li>
          <h1 id="prodDetailH1">Description</h1>
          <p id="prodDetailP">{product.description}</p>
        </li>

        {user.isAdmin ? (
          <button onClick={() => setShowForm(true)}>Edit Product</button>
        ) : null}
        {showForm ? (
          <form
            id="editForm"
            onSubmit={async (e) => {
              //show form when clicked
              e.preventDefault();
              const res = await axios.put(`/api/products/${id}`, {
                name,
                description,
                price,
                quantity,
                imageUrl,
              }); //put request to update product
              setShowForm(false);
              dispatch(fetchSingleProductAsync(id));
              //hide form after submit
            }}
          >
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              placeholder="name"
            />
            <input
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              type="text"
              placeholder="description"
              id="editFormDescp"
            />
            <input
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              type="text"
              placeholder="price"
            />
            <input
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              type="text"
              placeholder="quantity"
            />
            <input
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              type="text"
              placeholder="imageUrl"
            />
            <button type="submit">Submit</button>
          </form>
        ) : null}
      </ul>
    </div>
  );
};

export default SingleProduct;
