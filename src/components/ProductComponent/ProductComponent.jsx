import { useState } from "react";
import "./ProductComponent.css";


export const ProductComponent = (props) => {
  const [cart] = useState(props.cartItems);

  return <div className="product-component">
    <div className="row">
      {props.products.map((product) =>{
          return (
        <div className="col-lg-3 col-md-6 col-sm-12 p-1"  key={product.id}>
                        <div className="card">
                          <img src={product.imageName} className="card-img-top"></img>
                          <div className="card-body">
                            <h5 className="card-title">{product.name}</h5>
                            <p className="card-text">{product.desc}</p>
                            <p className="text-center">{product.price}</p>

                            <div className="card-body">
                            <a className="btn btn-primary" onClick={() => {
                              if (!cart.includes(product.id)) {
                                cart.push(product.id)
                                //window.localStorage.setItem('saved_cart', JSON.stringify(cart))
                              }

                              let cartData = window.localStorage.getItem('saved_cart') == null 
                                ? null
                                : JSON.parse(window.localStorage.getItem('saved_cart'));

                              if (cartData != null && !cartData.includes(product.id)) {
                                cartData.push(product.id)
                                window.localStorage.setItem('saved_cart', JSON.stringify(cartData))
                              }
                            }}>Add to cart</a>
                            </div>
                          </div>
                        </div>
        </div>
    )
  })}
  </div>
  </div>
};