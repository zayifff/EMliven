import React, { useContext } from 'react'
import './Cart.css'
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {

  const {cartItems,event_list,removeFromCart,getTotalCartAmount} = useContext(StoreContext);

  const navigate = useNavigate()

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Amount</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {event_list.map((item,index)=>{
          if (cartItems[item._id]>0) {
            return(
            <div>
              <div className="cart-items-title cart-items-item">
                <img src={item.image} alt="" />
                <p>{item.name}</p>
                <p>{item.price} TL</p>
                <p>{cartItems[item._id]}</p>
                <p>{item.price*cartItems[item._id]} TL</p>
                <p onClick={()=>removeFromCart(item._id)} className='remove'>x</p>
              </div>
              <hr />
            </div>
            )
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Tax</p>
              <p>{getTotalCartAmount()*15/100}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>{getTotalCartAmount() + getTotalCartAmount()*15/100} TL</b>
            </div>
          </div>
          <button onClick={() => navigate('/order')}>PROCEED TO CHECKOUT</button>
        </div>

      </div>
    </div>
  )
}
export default Cart
