import "./SingleProductComponent.css";

export const SingleProductComponent = (props) => {
  return (
    <div class="container-fluid">
      <div class="d-flex flex-column flex-column-reverse flex-md-row align-items-center">
          <div class="w-100 flex-fill text-center col-6">
                <img src="img/wrist.jpg" class="w-75 py-5 img-fluid"></img>
          </div>

          <div class="p-5 flex-fill col-6">
            <h2>Accessories</h2>
            <div class="text-center">
            <h1>Grip exerciser</h1>
            <p>Hand and forearm amplifier.</p>
            <h2>10 eu</h2>
            <a class="btn btn-outline-primary" href="cart.html">Add to cart</a>
            </div>
          </div>
      </div>
    </div>
  )
};
