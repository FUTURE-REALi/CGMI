import React, { useState } from 'react';

const friendsList = [
    { id: 1, name: "Friend 1", image: "https://via.placeholder.com/40" },
    { id: 2, name: "Friend 2", image: "https://via.placeholder.com/40" },
    { id: 3, name: "Friend 3", image: "https://via.placeholder.com/40" },
];

const Message = () => {
    const [messages, setMessages] = useState({
        1: [
            { text: "Hello!", sender: "user" },
            { text: "Hi, how are you?", sender: "friend" },
        ],
        2: [
            { text: "Hey!", sender: "user" },
            { text: "What's up?", sender: "friend" },
        ],
        3: [
            { text: "Good morning!", sender: "user" },
            { text: "Morning!", sender: "friend" },
        ],
    });
    const [currentFriend, setCurrentFriend] = useState(1);
    const [newMessage, setNewMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages({
                ...messages,
                [currentFriend]: [...messages[currentFriend], { text: newMessage, sender: "user" }],
            });
            setNewMessage("");
        }
    };

    const filteredFriends = friendsList.filter(friend =>
        friend.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="w-full h-96 flex bg-gray-100 shadow-lg rounded-2xl">
            <div className="w-1/3 bg-white shadow-lg rounded-l-lg">
                <div className="p-4 font-bold ml-6">Chats</div>
                <input
                    type="text"
                    className="px-2 border rounded-lg w-4/5 mb-2 ml-3"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <ul>
                    {filteredFriends.map((friend) => (
                        <li
                            key={friend.id}
                            className={`p-2 cursor-pointer flex items-center ${currentFriend === friend.id ? "bg-gray-200" : ""}`}
                            onClick={() => setCurrentFriend(friend.id)}
                        >
                            <img src={friend.image} alt={friend.name} className="h-8 w-8 rounded-full mr-2" />
                            {friend.name}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="w-2/3 flex flex-col h-full">
                <div className="flex-grow overflow-auto p-4">
                    {messages[currentFriend].map((msg, index) => (
                        <div
                            key={index}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"} mb-2`}
                        >
                            <div
                                className={`max-w-xs p-2 rounded-lg ${
                                    msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-300 text-black"
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>
                <div className="p-4 bg-white flex">
                    <input
                        type="text"
                        className="flex-grow p-2 w-2/3 border rounded-lg mr-2"
                        placeholder="Type a message"
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                    />
                    <button
                        className="p-2 bg-blue-500 text-white rounded-lg"
                        onClick={handleSendMessage}
                    >
                        Send
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Message;