import { ChatInput } from "@/src/components/Chat-input";
import ConversationWindow from "@/src/components/Conversation";

export default function SearchPage({ params }: { params: { search: string } }) {
  return (
    <div className="flex h-screen flex-col  bg-zinc-50 font-sans dark:bg-black relative">
      <div className="h-7 mt-2 z-10 w-full">
        <p className="text-center">Perplexity AI </p>
      </div>
      <div className="flex-1 overflow-hidden ">
        <div className=" h-full overflow-auto  ">
          <ConversationWindow />
        </div>
      </div>
      <footer>
        <div className="max-w-3xl mx-auto pt-3">
          <ChatInput />
          <div className="my-2">
            <p className="text-center text-sm">
              Perplexity clone can make mistakes{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
