import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([
    { text: "Hi! I'm your assistant. How can I help you?", isBot: true },
  ]);
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setMessages([...messages, { text: input, isBot: false }]);
    // Simulate bot response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          text: "Thanks for your message! I'll make sure it gets to the right person.",
          isBot: true,
        },
      ]);
    }, 1000);
    setInput('');
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 p-4 bg-primary rounded-full shadow-lg hover:bg-primary/90 transition-colors"
      >
        <MessageCircle className="w-6 h-6 text-white" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-20 right-4 w-80 bg-white rounded-lg shadow-xl"
          >
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="font-semibold">Chat with me</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-gray-100 rounded-full"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-96 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot
                        ? 'bg-gray-100'
                        : 'bg-primary text-white'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

            <form onSubmit={handleSubmit} className="p-4 border-t">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="w-full p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};