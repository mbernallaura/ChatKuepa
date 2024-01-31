'use client';
import { useState, useEffect } from 'react';
import io from 'socket.io-client';

const socket = io('http://localhost:4000');

const ChatPage = () => {
    const [sendMessage, setSendMessage] = useState('');
    const [getMessages, setGetMessages] = useState([]);
    const name = localStorage.getItem('name');
    console.log(name);

    const handleSubmit = (e) =>{
        e.preventDefault();
        const newMessage = {
            body: sendMessage,
            from: 'Yo'
        }
        setGetMessages([...getMessages, newMessage]);
        socket.emit('message', sendMessage); //enviar el mensaje al backend
        formulario.reset();
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
        <div className='h-screen w-screen flex items-center justify-center bg-greyK'>
            <div className='h-[calc(100%-10%)] w-[calc(100%-20%)] p-4 rounded-3xl bg-whiteK'>
                <div className='w-full p-2 border-b-2 border-greyk text-lg text-blueK'>Clases virtuales</div>
                <main className='h-[calc(100%-10%)] pb-4 flex flex-grow justify-end items-end overflow-y-auto'>
                    <ul className='w-full max-h-full'>
                        {
                            getMessages.map((message, index)=>(
                                <li key={index} className={`my-2 p-2 table text-base rounded-lg text-whiteK  ${message.from === 'Yo' ? 'bg-orangeK ml-auto' : 'bg-blueK' }`}>
                                    <span className='text-sm text-greyK block'>{message.from}</span>{message.body}
                                </li>
                            ))
                        }
                    </ul>
                </main>

                <form id='formulario' onSubmit={handleSubmit} className='w-full flex gap-2'>
                    <input
                        className='rounded-md p-2 w-full bg-orange-200'
                        type='text'
                        placeholder='Escribe un mensaje'
                        onChange={(e)=> setSendMessage(e.target.value)}
                    />
                </form>
            </div>
        </div>
    )
}

export default ChatPage;
