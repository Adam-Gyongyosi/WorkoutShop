import "./SearchBoxComponent.css";

export const SearchBoxComponent = (props) => {
  return (
    <div className="search-box-component">
      <input class="form-control w-25 ms-auto" placeholder="Search..." value={props.term} onChange={(e) => props.onTermChanged(e.target.value)} />
    </div>
  )
};
