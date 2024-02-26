import {useState, useEffect} from 'react';
import "./CartComponent.css";

export const CartComponent = (props) => {
  const [cart] = useState(() => {
    const data = window.localStorage.getItem('saved_cart')
    return data !== null
      ? JSON.parse(data)
      : props.cartItems
  })
  const [products, setProducts] = useState([])
  var sum = 0

  useEffect(() => {
    fetch('products.json')
    .then(res => res.json())
    .then(data => {setProducts(data)})
  })

  return (
    <div className="cart-component">
      <div className="container mb-5">
        <h1 style={{marginTop: "30px"}}>Shopping Bag</h1>
        {(cart.length > 0 && products.length > 0)
        ? <div>
          {cart.map(item => {
            let productItem;
            products.map(prod => {if(prod.id == item) productItem = prod})
            sum += productItem.price
            return (
              <div className="row bg-light align-items-center mb-4 p-2" key={item}>
                <div className="col-2">
                    <img src={productItem.imageName} className="img-fluid"></img>
                </div>
                <div className="col-8">
                    <h2>{productItem.name}</h2>
                </div>
                <div className="col-2 text-end">
                    <a className="text-dark" onClick={() => {
                      cart.splice(cart.indexOf(item), 1)
                      window.localStorage.setItem('saved_cart', JSON.stringify(cart))
                    }}>remove</a>
                    <h2>{productItem.price} eur</h2>
                </div>
              </div>
            )
          })}
          <div className="row">
            <div className="col-0 col-md-8"></div>
            <div className="col-6 col-md-2">
                <h1>Total</h1>
            </div>
            <div className="col-6 col-md-2 text-end">
                <h2>{sum} eur</h2>
                <p>Tax included</p>
            </div>
          </div>
          <div className="row">
            <div className="col-7 col-md-8"></div>
            <div className="col-5 col-md-4">
                <button type="button" className="btn btn-primary w-100">Checkout</button>
            </div>
          </div>
        </div>
        : <p>Your cart is empty</p>}
        </div>
      </div>
    
    )
  }