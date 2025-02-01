import React from 'react';  
import './event.css'; // Import the component styles  

const EventServices = () => {  
    return (  
        <div className="event-services-container">  
           <h2 class="text-4xl font-semibold text-center text-gray-800 mb-6 decoration-indigo-600">We also offer unique services for your events</h2>

            <div className="event-services">  
                <div className="service-item">  
                    <img src="https://media.istockphoto.com/id/944478708/photo/couple-eating-lunch-with-fresh-salad-and-appetizers.jpg?s=612x612&w=0&k=20&c=xZdIIHvakQrYCbR59RM8nrhEnw-xu4nE-BOeOhQPnck=" alt="Caterings" />  
                    <h3>Caterings</h3>  
                    <p>In the new era of technology we look in the future with certainty for life.</p>  
                </div>  
                <div className="service-item">  
                    <img src="https://images.pexels.com/photos/2388657/pexels-photo-2388657.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Birthdays" />  
                    <h3>Birthdays</h3>  
                    <p>In the new era of technology we look in the future with certainty for life.</p>  
                </div>  
                 
                <div className="service-item">  
                    <img src="https://images.pexels.com/photos/976866/pexels-photo-976866.jpeg?auto=compress&cs=tinysrgb&w=800" alt="Events" />  
                    <h3>Events</h3>  
                    <p>In the new era of technology we look in the future with certainty for life.</p>  
                </div>  
            </div>  
        </div>  
    );  
};  

export default EventServices;