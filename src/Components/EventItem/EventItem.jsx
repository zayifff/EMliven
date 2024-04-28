import React, { useContext } from 'react'
import './EventItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
const EventItem = ({id,name,image,price,date_d,date_m,time,place,description,category}) => {

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='event-item'>
      <div className="event-item-img-container">
        <img className='event-item-image' src={image} alt="" />
        {!cartItems[id]
            ?<img className='add' onClick={()=>addToCart(id)} src={assets.add_icon} alt=""/>
            :<div className='event-item-counter'>
                <img onClick={()=> removeFromCart(id)} src={assets.remove_icon} alt="" />
                <p>{cartItems[id]}</p>
                <img onClick={()=> addToCart(id)} src={assets.add_icon_plus} alt="" />
            </div>
        }
      </div>
      <div className="event-item-info">
        <p className='event-item-name'>{name}</p>
        <p className='event-item-description'>{description}</p>
        <p className='event-item-time-info'>{date_d} {date_m} {time} </p>
        <p className="event-item-place-info">{place}</p>
        <p className='event-item-price'>{price} TL</p>
      </div>
    </div>
  )
}

export default EventItem
