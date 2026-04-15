'use client';

import { useState, useRef, useEffect } from 'react';
import { useChat } from '@ai-sdk/react';
import { DefaultChatTransport } from 'ai';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { X, MessageCircle, Send, Minimize2, Maximize2 } from 'lucide-react';

export function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const { messages, input, handleInputChange, handleSubmit, status } = useChat({
    transport: new DefaultChatTransport({
      api: '/api/chat',
    }),
  });

  // Auto-scroll to latest message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  if (!isOpen) {
    return (
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-40 rounded-full shadow-lg hover:shadow-xl transition-all p-4 bg-primary text-primary-foreground hover:bg-primary/90"
        aria-label="Open chat"
      >
        <MessageCircle className="h-6 w-6" />
      </button>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-40 w-96 max-h-[600px] flex flex-col rounded-lg shadow-2xl bg-background border border-border">
      {/* Header */}
      <CardHeader className="border-b p-4 flex flex-row items-center justify-between space-y-0 rounded-t-lg bg-primary text-primary-foreground">
        <div className="flex items-center gap-2">
          <MessageCircle className="h-5 w-5" />
          <div>
            <CardTitle className="text-base">Trade Metrix Support</CardTitle>
            <p className="text-xs opacity-90 mt-0.5">AI Assistant Online</p>
          </div>
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setIsMinimized(!isMinimized)}
            className="p-1.5 hover:bg-primary/80 rounded transition-colors"
            aria-label="Toggle minimize"
          >
            {isMinimized ? (
              <Maximize2 className="h-4 w-4" />
            ) : (
              <Minimize2 className="h-4 w-4" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(false)}
            className="p-1.5 hover:bg-primary/80 rounded transition-colors"
            aria-label="Close chat"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
      </CardHeader>

      {!isMinimized && (
        <>
          {/* Messages */}
          <CardContent className="flex-1 overflow-y-auto p-4 space-y-4 max-h-[420px]">
            {messages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-center space-y-2">
                <MessageCircle className="h-8 w-8 text-muted-foreground opacity-50" />
                <p className="text-sm text-muted-foreground">
                  Hi! How can we help you today?
                </p>
                <p className="text-xs text-muted-foreground">
                  Ask about our trading platform, strategies, or pricing
                </p>
              </div>
            ) : (
              messages.map((message, index) => {
                // Extract text from message parts (AI SDK 6 format)
                let messageText = '';
                if (message.parts && Array.isArray(message.parts)) {
                  messageText = message.parts
                    .filter((part: any) => part.type === 'text')
                    .map((part: any) => part.text)
                    .join('');
                } else if (typeof message.content === 'string') {
                  messageText = message.content;
                }

                return (
                  <div
                    key={index}
                    className={`flex ${
                      message.role === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-lg ${
                        message.role === 'user'
                          ? 'bg-primary text-primary-foreground rounded-br-none'
                          : 'bg-muted text-foreground rounded-bl-none border border-border'
                      }`}
                    >
                      <p className="text-sm leading-relaxed">
                        {messageText || 'Message sent'}
                      </p>
                    </div>
                  </div>
                );
              })
            )}

            {status === 'streaming' && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg rounded-bl-none px-4 py-2 border border-border">
                  <div className="flex gap-1.5">
                    <div className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce" />
                    <div
                      className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce"
                      style={{ animationDelay: '0.2s' }}
                    />
                    <div
                      className="h-2 w-2 bg-foreground/50 rounded-full animate-bounce"
                      style={{ animationDelay: '0.4s' }}
                    />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </CardContent>

          {/* Input Area */}
          <form
            onSubmit={handleSubmit}
            className="border-t p-4 flex gap-2 bg-muted/30"
          >
            <Input
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
              className="flex-1"
              disabled={status === 'streaming'}
              autoFocus
            />
            <Button
              type="submit"
              size="sm"
              disabled={status === 'streaming' || !input || !input.trim()}
              className="gap-2"
            >
              <Send className="h-4 w-4" />
              <span className="hidden sm:inline">Send</span>
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
