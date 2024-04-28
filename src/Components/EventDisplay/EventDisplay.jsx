import React, { useContext } from 'react'
import './EventDisplay.css'
import { StoreContext } from '../../context/StoreContext'
import EventItem from '../EventItem/EventItem'

const EventDisplay = ({category}) => {

    const {event_list} = useContext(StoreContext)

    return (
    <div className='event-display' id='event-display'>
        <h2>Popular Events Near You</h2>
        <div className="event-display-list">
            {event_list.map((item,index)=>{
                if(category==="All" || category===item.category){
                    return <EventItem key={index} id={item._id} name={item.name} price={item.price} date_d={item.date_d} date_m={item.date_m} time={item.time} place={item.place} description={item.description} category={item.category} image={item.image}/>
                }
            })}
        </div>
    </div>
  )
}

export default EventDisplay
