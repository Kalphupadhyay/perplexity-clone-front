"use client";

import {
  Conversation,
  ConversationContent,
  ConversationEmptyState,
  ConversationScrollButton,
} from "./ai-elements/conversation";
import { Message, MessageAvatar, MessageContent } from "./ai-elements/message";
import { CopyIcon, MessageSquareIcon, ThumbsUpIcon } from "lucide-react";
import { nanoid } from "nanoid";
import { Fragment, useEffect, useState } from "react";
import { ChatService } from "../services/chat.service";
import { useInputStore } from "../store/chat.store";
import { Action, Actions } from "./ai-elements/actions";

const ConversationWindow = () => {
  const chatStore = useInputStore((state) => state);
  const { chatMessage } = ChatService();
  const [visibleMessages, setVisibleMessages] = useState<
    {
      key: string;
      value: string;
      name: string;
      avatar: string;
    }[]
  >([]);

  useEffect(() => {
    setVisibleMessages((prev) => [
      ...prev,
      {
        key: nanoid(),
        value: chatStore.message,
        name: "You",
        avatar: "https://github.com/haydenbleasel.png",
      },
    ]);

    getMessage(chatStore.message);
  }, [chatStore.message]);

  const getMessage = async (message: string) => {
    if (!message) return;
    chatStore.setIsAiResponding(true);
    const response = await chatMessage(message);
    setVisibleMessages((prev) => {
      return [
        ...prev,
        {
          key: nanoid(),
          value: response.data,
          name: "AI Assistant",
          avatar: "https://github.com/openai.png",
        },
      ];
    });
    chatStore.setIsAiResponding(false);
  };

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
            <div key={key}>
              <Message from={name == "You" ? "user" : "assistant"}>
                <MessageContent>{value}</MessageContent>
                <MessageAvatar name={name} src={avatar} />
              </Message>
              {name === "AI Assistant" && (
                <Actions className="mt-2">
                  <Action label="Like">
                    <ThumbsUpIcon className="size-4" />
                  </Action>
                  <Action
                    onClick={() => navigator.clipboard.writeText(value)}
                    label="Copy"
                  >
                    <CopyIcon className="size-4" />
                  </Action>
                </Actions>
              )}
            </div>
          ))
        )}
      </ConversationContent>

      <ConversationScrollButton />
    </Conversation>
  );
};

export default ConversationWindow;
