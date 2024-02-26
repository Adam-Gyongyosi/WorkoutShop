import {useEffect, useState} from 'react';
import { FilterComponent } from '../FilterComponent/FilterComponent';
import { ProductComponent } from '../ProductComponent/ProductComponent';
import { SearchBoxComponent } from '../SearchBoxComponent/SearchBoxComponent';
import "./ProductOverviewComponent.css";

export const ProductOverviewComponent = (props) => {

  const [searchTerm, setSearchTerm] = useState("");
  const [categoryTerm, setCategoryTerm] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(props.products);
  const [maxPriceR, setMaxPriceR] = useState("");
  const [cart] = useState(props.cartItems);
  


  function Filter(products, st, cat, maxR) {
    let filteredProducts = [...products];
    if (st != null && st.length > 0) {
      filteredProducts = filteredProducts.filter(t => t.name.toLowerCase().includes(st.toLowerCase()) || t.desc.toLowerCase().includes(st.toLowerCase()));
    }
    if (cat != null && cat.length > 0) {
      filteredProducts = filteredProducts.filter(t => t.category === cat);
    }
    if (maxR != null && maxR.length > 0 && maxR != 0) {
      const max = parseInt(maxR)
      filteredProducts = filteredProducts.filter(t => t.maxPriceR <= max);
    }
    return filteredProducts;
  }

  useEffect(() => {
      setFilteredProducts(Filter(props.products, searchTerm, categoryTerm,maxPriceR));
      console.log(filteredProducts);
  }, [props.products,searchTerm,categoryTerm,maxPriceR]);


 
  function onFilterReset() {
    setSearchTerm("");
    setCategoryTerm("");
    setMaxPriceR("");
  }

  return (
    <div className="product-overview-component">
      <div class="d-flex justify-content-center align-items-center-top">
        <div class="header">
           <img class="header-img img-fluid" src="img/productov.jpg"></img>
          <p class="centered h1">Our products</p>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row mh-80">
          <div className="col-lg-2 col-md-12 col-sm-12 border border-3">
            <FilterComponent products={props.products} selected={categoryTerm} onTermChanged={newTerm => setCategoryTerm(newTerm)}  onFilterReset={onFilterReset}/>
          </div>

          <div className="col-lg-10 col-md-12 col-sm-12">
            <div className="row pt-3">
              <SearchBoxComponent term={searchTerm} onTermChanged={newTerm => setSearchTerm(newTerm)} />
            </div>

            <section className="items bg-white">
              <div className="container-md">
                <ProductComponent products={filteredProducts} maxPriceR={maxPriceR} onMaxPriceChanged={newValue => setMaxPriceR(newValue)} cartItems={cart} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
};
