import "./FilterComponent.css";


export const FilterComponent = (props) => {

  var categories = [];
  props.products.map((product) => {
    if(!categories.includes(product.category)){
       categories.push(product.category);
    }
  })


  let max = 0;
  props.products.map((product) =>{
    if(product.price > max){
      return max = product.price;
    }
  })

  return (
    <div className="filter-component">
      <div class="p-3">
        <h2>Filter</h2>
        <h2>Category</h2>
        <ul class="list-unstyled">
          {
            categories.map(category => {
              return (
                <li><input type="radio"  value={props.selected} checked={props.selected === category} name="category" onChange={(e) => props.onTermChanged(category)} key={categories.indexOf(category)}/>{category}</li>
              )
            })
          }
        </ul>

        <h2>Price</h2>
        <input type="range" class="form-range w-80 d-flex" id="Range"  value={props.maxPriceR} onChange={(e) => props.onMaxPriceChanged(props.price)}/>
        <div class="row">
          <div class="col"><p class="text-start">0eu</p></div>
          <div class="col"><p class="text-end">{max}</p></div>
        </div>
      </div>

      <button type="button" class="btn btn-secondary p-3" onClick={() => props.onFilterReset()}>Clear filter</button>
    </div>
  )
};
