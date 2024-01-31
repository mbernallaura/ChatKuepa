'use client';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';
import chatStyles from '@/styles/chat.module.css';

const socket = io('http://localhost:4000');

const ChatPage = () => {
    const [sendMessage, setSendMessage] = useState('');
    const [getMessages, setGetMessages] = useState([]);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newMessage = {
            body: sendMessage,
            from: 'Yo'
        }
        setGetMessages([...getMessages, newMessage]);
        socket.emit('message', sendMessage); //enviar el mensaje al backend
    }

    const receiveMessage =( message ) =>{
        setGetMessages((state) => [...state, message]);
    }

    useEffect(() => {
        socket.on('messageAll', receiveMessage);

        return () =>{
            socket.off('messageAll', receiveMessage);
        }
    }, []);


    return (
        <div className={`${chatStyles.chat}`}>
            <ul>
                {
                    getMessages.map((message, index)=>(
                        <li key={index}>
                            {message.from}:{message.body}
                        </li>
                    ))
                }
            </ul>
            <form onSubmit={handleSubmit}>
                <footer>
                    <input
                        type='text'
                        placeholder='Escribe un mensaje'
                        onChange={(e)=> setSendMessage(e.target.value)}
                    />
                    <button>Send</button>
                </footer>
            </form>
        </div>
    )
}

export default ChatPage;
