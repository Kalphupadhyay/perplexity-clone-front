"use client";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "./ai-elements/conversation";
import { Message, MessageAvatar, MessageContent } from "./ai-elements/message";
import { MessageSquareIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { useEffect, useState } from "react";

const messages: { key: string; value: string; name: string; avatar: string }[] =
  [
    {
      key: nanoid(),
      value: "Hello, how are you?",
      name: "Alex Johnson",
      avatar: "https://github.com/haydenbleasel.png",
    },
    {
      key: nanoid(),
      value: "I'm good, thank you! How can I assist you today?",
      name: "AI Assistant",
      avatar: "https://github.com/openai.png",
    },
  ];

const ConversationWindow = () => {
  const [visibleMessages, setVisibleMessages] = useState<
    {
      key: string;
      value: string;
      name: string;
      avatar: string;
    }[]
  >([]);

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < messages.length && messages[currentIndex]) {
        const currentMessage = messages[currentIndex];
        setVisibleMessages((prev) => [
          ...prev,
          {
            key: currentMessage.key,
            value: currentMessage.value,
            name: currentMessage.name,
            avatar: currentMessage.avatar,
          },
        ]);
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 500);

    return () => clearInterval(interval);
  }, []);

  return (
    <Conversation className="relative size-full">
      <ConversationContent className="max-w-3xl mx-auto">
        {visibleMessages.length === 0 ? (
          <ConversationEmptyState
            description="Messages will appear here as the conversation progresses."
            icon={<MessageSquareIcon className="size-6" />}
            title="Start a conversation"
          />
        ) : (
          visibleMessages.map(({ key, value, name, avatar }, index) => (
            <Message from={index % 2 === 0 ? "user" : "assistant"} key={key}>
              <MessageContent>{value}</MessageContent>
              <MessageAvatar name={name} src={avatar} />
            </Message>
          ))
        )}
      </ConversationContent>
      <ConversationScrollButton />
    </Conversation>
  );
};

export default ConversationWindow;
