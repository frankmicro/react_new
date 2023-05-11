import React from "react";

const ProductList = (props) => {
  // const [quantity, setQuantity] = useState(0)
    return (
        <div>
            <div className="card-title">
              { props.name }
            </div>
            <div className="card-body">
              <i className={`icofont-10x icofont-${props.icon}`}></i>
              <form>
                <div className="row">
                  <div className="cell">
                    <label>Type:</label>
                  </div>
                  <div className="cell">
                    <em>{ props.type }</em>
                  </div>
                </div>
                <div className="row">
                  <div className="cell">
                    <label>Price:</label>
                  </div>
                  <div className="cell">
                    ${ props.price }
                  </div>
                </div>
                {/* <div className="row">
                  <div className="cell">
                    <label>Quantity:</label>
                  </div>
                  <div className="cell">
                    <input type="number" 
                    onChange={e => setQuantity(e.target.value)}
                    value={quantity}/>
                  </div>
                </div> */}
              </form>
            </div>
            <div className="card-footer">
              <button onClick={() => props.addToCart(props.id, parseInt(1))} className="btn btn-light">
                Add to cart
              </button>
            </div>
        </div>
        
    )
}

export default ProductList;