import { createAsyncThunk } from '@reduxjs/toolkit';


const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
    const response = await client.get('/fakeApi/posts')
    return response.posts
})



import axios from 'axios';

const API_URL = 'your_backend_api_url';

export const fetchEvents = async () => {
    try {
        const response = await axios.get(`${API_URL}/events`);
        return response.data;
    } catch (error) {
        throw error;
    }
};




import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchEvents } from './eventService';
import { addEvent } from './eventActions';

const EventList = () => {
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchEvents();
                data.forEach((event) => dispatch(addEvent(event)));
            } catch (error) {
                console.error('Error fetching events:', error);
            }
        };
        fetchData();
    }, [dispatch]);

    return (
        <div>
            {events.map((event) => (
                <div key={event.id}>
                    <h2>{event.title}</h2>
                    {/* Render other event details */}
                </div>
            ))}
        </div>
    );
};

export default EventList;
