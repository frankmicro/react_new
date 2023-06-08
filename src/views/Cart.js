import React from "react";

const Cart = (props) => {
    const {icon, totalQuantity, total, index, id, price, name} = props;

    return (
        <>
        <tr key={id}>
            <td width={2} height={1}>
            <i className={`icofont-${icon} icofont-3x`}></i>
            </td>
            <td>{name}</td>
            <td>{price['USD']}</td>
            <td className="center">{totalQuantity}</td>
            <td>{total.toFixed(2)}</td>
            <td className="center">
            <button 
            onClick={() => props.removeItems(index, total)}
            className="btn btn-light cart-remove">&times;</button>
            </td>
        </tr>
     </>
    )
}

export default Cart;
