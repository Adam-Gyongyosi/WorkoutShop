import "./NavbarComponent.css";
import {Link, useMatch, useResolvedPath } from "react-router-dom";
import { useState, useEffect } from "react";

export const NavbarComponent = (props) => {
  const [cartData, setCartData] = useState(props.itemCounter);

  useEffect(() => {
    let savedCart = window.localStorage.getItem('saved_cart') == null 
      ? []
      : JSON.parse(window.localStorage.getItem('saved_cart'));
    setCartData(savedCart)
  })
 

  return (
    <div className="navbar-component">
      <header>
        <nav class="navbar fixed-top navbar-expand-md bg-dark navbar-dark text-light">
          <div class="container-fluid">
            <label class="title">Workout Shop</label>

            <button
              class="navbar-toggler border-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsemenu"
              aria-controls="#collapsemenu"
              aria-expanded="false"
              aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="collapsemenu">
              <ul class="navbar-nav ms-auto mb-2 mb-md-0">
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/products">Products</CustomLink>
                <CustomLink to="/cart"><img src="img/carticon.svg" class="carticon"></img>
                  <span className="rounded-circle bg-danger d-flex justify-content-center">{cartData.length}</span>                 
                </CustomLink>
                
              </ul>
            </div>

          </div>
        </nav>
      </header>
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
