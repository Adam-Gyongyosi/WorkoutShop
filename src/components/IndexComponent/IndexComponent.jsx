import {useEffect, useState} from 'react';
import "./IndexComponent.css";
import {Link, useMatch, useResolvedPath } from "react-router-dom";

export const IndexComponent = (props) => {
  const [products, setProducts] = useState([]);
  var [cart] = useState(props.cartItems);

  useEffect(() => {
    fetch('products.json')
    .then(res => {
      return res.json();
    })
    .then(data => {
        setProducts(data);
    })
  })

  return (
    <div>
      <div class="d-flex justify-content-center align-items-center-top headerclass">
        <div class="header">
          <img class="header-img img-fluid fullscreen" src="/img/mainpageheader.jpg"></img>
          <div class="centered">
            <p class="h1">Welcome to the Workout Shop</p>
            <p>This shop is about WORKOUT.</p>
            <a href="#" class="btn btn-primary">Random button</a>
          </div>
        </div>
      </div>

      <div class="container-md px-2 mt-5 mb-5">
        <section>
            <div class="justify-content-center text-center">
            <h2>Workout Shop - Stop wishing, start doing </h2>
            <p>
              This shop is not like the others. It's something special. Something new. You are in the best place to start your workout plan. Here you can find everything to gain muscles.
              We will help you to be the next Schwarzenegger. Quality product for reasonable prices. Super useful accessories. Neutritions and vitamins to keep you on top before/after a long workout session.
            </p>
            <p>What is stopping you?No excuses. Get to work now!</p>
              <iframe class="video w-75 h-auto"
                src="https://www.youtube.com/embed/wnHW6o8WMas"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture">
              </iframe>
            </div>
          </section>
      </div>

      <section class="items">
        <div class="container-md">
          <h1>Items:</h1>

          <div class="row">
            {products.map((product) => {
              if (product.topSeller === true) {
                return (
                  <div class="col-lg-3 col-md-6 col-sm-12 p-1" key={product.id}>
                    <div class="card">
                      <img src={product.imageName} class="card-img-top"></img>
                      <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">{product.desc}</p>
                        <div class="card-body">
                          <a className="btn btn-primary" onClick={() => {
                            if (!cart.includes(product.id)) {
                              cart.push(product.id)
                              
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
              }}
            )}
          </div>

          <div class="row">
            <CustomLink to="/products" class="d-flex justify-content-center text-light pt-3"><h5>view all products</h5></CustomLink>
          </div>

        </div>
      </section>

      <div class="container">
        <section class="py-5 p-2">
          <div class="d-flex flex-column flex-column-reverse flex-md-row align-items-center">
            <div class="">
              <h1>About us</h1>
              <p>Workout shop was founded in 1978. It has quickly became famous thanks to the quality services which we offer.
              Many succesfull body builder started their careers with us. We have stores all over the world with professional trainers.</p>
              <ul>
                <li>Qulity products</li>
                <li>Supportive professionals</li>
                <li>Enjoyable workouts</li>
              </ul>
            </div>
            <div class="w-100 text-center">
              <img src="img/aboutimg.jpg" class="w-100"></img>
              <figcaption>Picture of our gym.</figcaption>
            </div>
          </div>
        </section>
      </div>

      <section class="special">
        <img src="img/specimg.jpg"></img>
        <p class="specialdeal h1">Check out our special workout rope. Buy for -20%, just today!</p>
      </section>

      <section class="partners">
        <h2>Our partners:</h2>
        <div class="partnerrow text-center">
          <div class="column">
            <img src="img/partners1.jpg"></img>
          </div>
          <div class="column">
            <img src="img/partners2.jpg"></img>
          </div>
          <div class="column">
            <img src="img/partners3.jpg"></img>
          </div>
        </div>
      </section>

      <div class="container-fluid faq">
        <h2 class="pt-3 ml-2">FAQ</h2>
        <div class="accordion pb-4" id="accordionExample">
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              Where can i find your shops?
            </button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>We have shops all over the world.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="headingTwo">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              Should i start training now?
            </button>
          </h2>
          <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Absolutely. As soon as possible.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              What time of day is best to work out?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>When you have time.</p>
            </div>
          </div>
        </div>
        <div class="accordion-item bg-light">
          <h2 class="accordion-header" id="headingThree">
            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              Do I need to warm up before my workouts?
            </button>
          </h2>
          <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              <p>Warm up is really important, don't neglect it.</p>
            </div>
          </div>
        </div>
      </div>
      </div>

      <section class="tothetop">
        <a href="#">Back to the top</a>
      </section>

    </div>
  )
};

function CustomLink({to, children, ...props}) {
  const resolvedPath = useResolvedPath(to);
  const isActive = useMatch({ path: resolvedPath.pathname, end:true })

  return (
    <li className={isActive ? 'active' : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}