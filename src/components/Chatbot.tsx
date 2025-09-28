import React, { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState([
    { sender: "admin", text: "Welcome! Ask your question here." }
  ]);
  const [input, setInput] = useState("");
  const [open, setOpen] = useState(false);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;
    const studentMsg = { sender: "student", text: input };
    setMessages(prev => {
      const updated = [...prev, studentMsg];
      // Auto admin reply
      setTimeout(() => {
        setMessages(msgs => [...msgs, { sender: "admin", text: "Thanks for your question! We'll get back to you soon." }]);
      }, 700);
      return updated;
    });
    setInput("");
  };

  return (
    <>
      {/* Chatbot Icon */}
      {!open && (
        <button
          className="fixed bottom-6 right-6 w-14 h-14 bg-primary rounded-full flex items-center justify-center shadow-lg z-50 hover:bg-primary/80"
          onClick={() => setOpen(true)}
          aria-label="Open chatbot"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><path d="M8 15c1.333 1 2.667 1 4 0" /><path d="M9 9h.01" /><path d="M15 9h.01" /></svg>
        </button>
      )}
      {/* Chatbot Window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 bg-card border rounded shadow-lg z-50">
          <div className="p-4 border-b font-bold flex justify-between items-center">
            Chatbot
            <button onClick={() => setOpen(false)} className="text-lg text-muted-foreground hover:text-primary">×</button>
          </div>
          <div className="p-4 h-64 overflow-y-auto flex flex-col gap-2">
            {messages.map((msg, idx) => (
              <div key={idx} className={`text-sm ${msg.sender === "admin" ? "text-primary" : "text-foreground"}`}>
                <b>{msg.sender === "admin" ? "Admin" : "You"}:</b> {msg.text}
                {/* Admin reply button removed, replies are now automatic */}
              </div>
            ))}
          </div>
          <form onSubmit={handleSend} className="flex border-t">
            <input
              type="text"
              value={input}
              onChange={e => setInput(e.target.value)}
              className="flex-1 p-2 border-none outline-none bg-background"
              placeholder="Type your question..."
            />
            <button type="submit" className="px-4 py-2 bg-primary text-white">Send</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
