// WhatsAppSender.js
import React, { useState } from 'react';
import axios from '../axiosConfig';

const WhatsAppSender = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [wNumber,setWNumber] = useState('')
    const [wMessage,setWMessage] = useState('')
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [wStatus,setWStatus] = useState('')

    const handleSendMessage = async () => {
        try {
            const response = await axios.post('/send-message', {
                to: phoneNumber,
                messageBody: message
            });

            if (response.data.success) {
                console.log(response)
                setStatus('Message sent successfully!');
            } else {
                setStatus('Failed to send message.');
            }
        } catch (error) {
            setStatus('Error sending message.');
        }
    };

    const handleSendWhatsAppMessage = async () =>{
        try {
            const response = await axios.post('/send-whatsapp', {
                to: wNumber,
                messageBody: wMessage
            });

            if (response.data.success) {
                console.log(response)
                setWStatus('WhatsApp Message sent successfully!');
            } else {
                setWStatus('Failed to send whatsApp message.');
            }
        } catch (error) {
            setWStatus('Error sending whatsApp message.');
        }
    }

    return (
        <div>
            <h1>Send Message</h1>
            <input
                type="text"
                placeholder="Phone Number (e.g., +1234567890)"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
            />
            <textarea
                placeholder="Your message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={handleSendMessage}>Send</button>
            <p>{status}</p>

            <h1>Send WhatsApp Message</h1>
            <input
                type="text"
                placeholder="Phone Number (e.g., +1234567890)"
                value={wNumber}
                onChange={(e) => setWNumber(e.target.value)}
            />
            <textarea
                placeholder="Your message"
                value={wMessage}
                onChange={(e) => setWMessage(e.target.value)}
            />
            <button onClick={handleSendWhatsAppMessage}>Send</button>
            <p>{wStatus}</p>
        </div>
    );
};

export default WhatsAppSender;
