import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
import '../pages/SportsHomePage.css';

const EventList = () => {
    const [events, setEvents] = useState([]);
    // const navigate = useNavigate();

    useEffect(() => {
        fetchEvents();
    }, []);

    async function fetchEvents() {
        try {
            const response = await axios.get('https://ticket-backend-1-09ex.onrender.com/api/events');
            setEvents(response.data.events);
        } catch (error) {
            console.error('Error fetching events:', error);
        }
    }

    function calculateCountdown(eventDate) {
        console.log('Event Date:', eventDate); // Check the value of eventDate
        const now = new Date().getTime();
        const eventTime = new Date(eventDate).getTime();
        console.log('Now:', now, 'Event Time:', eventTime); // Check the values of now and eventTime
        const distance = eventTime - now;
        if (distance < 0) {
            // Event date has passed, return a countdown with all zeros
            console.log('Event date has passed:', eventDate); // Log that the event date has passed
            return { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        console.log('Countdown:', { days, hours, minutes, seconds }); // Log the calculated countdown
        return { days, hours, minutes, seconds };
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setEvents(prevEvents =>
                prevEvents.map(event => ({
                    ...event,
                    countdown: calculateCountdown(event.event_date)
                }))
            );
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        console.log('Events:', events); // Check the value of events array
    }, [events]); // Add events as a dependency

    return (
        <div id="eventList">
            {events.length > 0 && events.map(event => (
                <div className="eventItem" key={event._id}>
                    <h2 className="eventName">{event.event_name}</h2>
                    <p className="eventDetails"><strong>Event ID:</strong> {event.event_id}</p>
                    <p className="eventDetails"><strong>Location:</strong> {event.event_location}</p>
                    <p className="eventDetails"><strong>Date:</strong> {new Date(event.event_date).toLocaleDateString()}</p>
                    <p className="eventDetails"><strong>Regular Price:</strong> {event.regular_price}</p>
                    <p className="eventDetails"><strong>VIP Price:</strong> {event.vip_price}</p>
                    <p className="eventDetails"><strong>Normal Price:</strong> {event.normal_price}</p>
                    <img className="eventFlyer" src={event.event_flyer} alt="Event Flyer" />
                    {event.countdown && (
                        <p className="eventCountdown">
                            <strong>Countdown:</strong> {event.countdown.days} days {event.countdown.hours} hours {event.countdown.minutes} minutes {event.countdown.seconds} seconds
                        </p>
                    )}
                    <a className="purchaseTicketBtn" href="https://we-dey-4u-4life-if7p-git-main-we-dey-4-u.vercel.app/" target="_blank" rel="noopener noreferrer">
                        <span>Secure Your Ticket</span>
                    </a>
                </div>
            ))}
        </div>
    );
};

export default EventList;