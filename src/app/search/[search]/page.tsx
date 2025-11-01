import ConversationWindow from "@/src/components/Conversation";

export default function SearchPage({ params }: { params: { search: string } }) {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <div className="mx-auto my-8 w-full max-w-3xl px-4">
        <ConversationWindow />
      </div>
    </div>
  );
}
