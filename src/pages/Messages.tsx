import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Phone, Video, Info, Send, Image, Smile, PaperclipIcon, Triangle, Circle, Square } from "lucide-react";

const Messages = () => {
  const [activeChat, setActiveChat] = useState(0);
  
  const conversations = [{
    id: 1,
    user: "Front Man",
    lastMessage: "Let the games begin...",
    time: "5m",
    avatar: "FM",
    unread: 3,
    online: true,
    role: "admin"
  }, {
    id: 2,
    user: "Player 067",
    lastMessage: "I'll win this time!",
    time: "1h",
    avatar: "067",
    unread: 0,
    online: true,
    role: "player"
  }, {
    id: 3,
    user: "Player 001",
    lastMessage: "Would you like to play a game?",
    time: "2h",
    avatar: "001",
    unread: 0,
    online: false,
    role: "player"
  }];

  const messages = [{
    id: 1,
    sender: "Front Man",
    text: "Welcome to the next challenge...",
    time: "10:05 AM",
    isOwn: false
  }, {
    id: 2,
    sender: "You",
    text: "I'm ready for anything!",
    time: "10:07 AM",
    isOwn: true
  }, {
    id: 3,
    sender: "Front Man",
    text: "The prize pool has increased to ₩45.6 billion",
    time: "10:08 AM",
    isOwn: false
  }, {
    id: 4,
    sender: "You",
    text: "When does the next game start?",
    time: "10:10 AM",
    isOwn: true
  }];

  return (
    <div className="flex h-[calc(100vh-7rem)] rounded-lg overflow-hidden border border-border bg-white">
      {/* Left sidebar - Conversations */}
      <div className="w-80 border-r border-gray-200 flex flex-col bg-white">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="p-3 border-b border-gray-200 bg-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-1">
              <Triangle className="h-4 w-4 text-squidRed" />
              <Circle className="h-4 w-4 text-squidGreen" />
              <Square className="h-4 w-4 text-squidPink" />
            </div>
            <h2 className="font-squid text-xl text-squidRed">MESSAGES</h2>
          </div>
          <div className="relative">
            <input 
              type="text" 
              placeholder="Search contestants..." 
              className="w-full px-3 py-2 pl-9 rounded-md border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-squidRed text-sm text-gray-900" 
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-squidRed/50" />
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="flex-1 overflow-y-auto scrollbar-none bg-white"
        >
          {conversations.map((chat, index) => (
            <motion.div 
              key={chat.id} 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-3 border-b border-gray-200 hover:bg-gray-100 transition-colors cursor-pointer flex items-center ${activeChat === index ? "bg-gray-100" : ""}`}
              onClick={() => setActiveChat(index)}
            >
              <div className="relative">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${chat.role === "admin" ? "bg-squidRed" : "bg-squidGreen"}`}>
                  {chat.avatar}
                </div>
                {chat.online && <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-squidGreen border-2 border-white"></div>}
              </div>
              
              <div className="ml-3 flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-squid text-gray-900">{chat.user}</h3>
                  <span className="text-xs text-gray-500">{chat.time}</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
              
              {chat.unread > 0 && (
                <div className="ml-2 bg-squidRed text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {chat.unread}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
      
      {/* Right side - Active conversation */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat header */}
        <motion.div 
          className="p-3 border-b border-gray-200 flex justify-between items-center" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="flex items-center">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${conversations[activeChat].role === "admin" ? "bg-squidRed" : "bg-squidGreen"}`}>
              {conversations[activeChat].avatar}
            </div>
            <div className="ml-3">
              <h3 className="font-squid text-gray-900">{conversations[activeChat].user}</h3>
              <p className="text-xs text-gray-500">
                {conversations[activeChat].online ? <span className="text-squidGreen">● Online</span> : "Offline"}
              </p>
            </div>
          </div>
          
          <div className="flex gap-2">
            {[Phone, Video, Info].map((Icon, index) => (
              <motion.button 
                key={index}
                className="p-2 rounded-full hover:bg-gray-100" 
                whileHover={{ scale: 1.1 }} 
                whileTap={{ scale: 0.9 }}
              >
                <Icon className="h-5 w-5 text-squidRed" />
              </motion.button>
            ))}
          </div>
        </motion.div>
        
        {/* Messages */}
        <motion.div 
          className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-none" 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          {messages.map((message, index) => (
            <motion.div 
              key={message.id} 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className={`flex ${message.isOwn ? "justify-end" : "justify-start"}`}
            >
              <div className={`rounded-lg p-3 max-w-[80%] ${
                message.isOwn 
                  ? "bg-squidRed text-white rounded-br-none" 
                  : "bg-gray-100 text-gray-900 rounded-bl-none border border-gray-200"
              }`}>
                <p>{message.text}</p>
                <p className="text-xs mt-1 opacity-70 text-right">{message.time}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Message input */}
        <motion.div 
          className="p-3 border-t border-gray-200 bg-white" 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <div className="flex items-center gap-2 relative">
            <input 
              type="text" 
              placeholder="Type your message..." 
              className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white focus:outline-none focus:ring-2 focus:ring-squidRed text-gray-900 placeholder-gray-500" 
            />
            
            <div className="absolute right-16 flex gap-2">
              {[Smile, PaperclipIcon, Image].map((Icon, index) => (
                <motion.button 
                  key={index}
                  className="text-gray-500 hover:text-squidRed transition-colors" 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Icon className="h-5 w-5" />
                </motion.button>
              ))}
            </div>
            
            <motion.button 
              className="bg-squidRed text-white p-2 rounded-full hover:bg-squidRed/90 transition-colors" 
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Send className="h-5 w-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Messages;
