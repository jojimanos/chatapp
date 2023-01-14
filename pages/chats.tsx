import React, {useState, useEffect, useContext} from "react";
import {Context} from '../context';
import {useRouter} from 'next/router';
import dynamic from 'next/dynamic';

const ChatEngine = dynamic(() => 
import('react-chat-engine').then((module) => module.ChatEngine));

const MessageFromSocial = dynamic(() =>
import('react-chat-engine').then((module) => module.MessageFromSocial));

export default function Chats() {
    const {username, secret} = useContext(Context)
    const router = useRouter();
    const [showChat, setShowChat] = useState(false);

useEffect(() => {
    if (typeof document !== null) {
        setShowChat(true);
    }
});

useEffect(() => {
    if(username.lenght === 0 || secret.lenght === 0) 
        router.push('/')
});

if (!showChat) return <div/>

    return (
        <div><div className="text-black">
            <ChatEngine
            height='calc(100vh - 200px)' projectID='c59d77bc-6d9b-4253-b0eb-da501de5eccc' userName={username} userSecret={secret} 
            />
            </div></div>
    )
}