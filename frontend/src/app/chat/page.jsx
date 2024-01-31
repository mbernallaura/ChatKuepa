'use client';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const ChatPage = () => {
    const [sendMessage, setSendMessage] = useState('');
    const [getMessages, setGetMessages] = useState([])

    const handleSubmit = (e) =>{
        e.preventDefault();
        socket.emit('message', sendMessage); //enviar el mensaje al backend
    }

    useEffect(() => {
        socket.on('messageAll', (message) =>{
            console.log(message);
            setGetMessages([...getMessages, message])
        })
    }, [])
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Escribe un mensaje'
                    onChange={(e)=> setSendMessage(e.target.value)}
                />
                <button>Send</button>
            </form>

            <ul>
                {
                    getMessages.map((message, index)=>(
                        <li key={index}>{message}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default ChatPage;
