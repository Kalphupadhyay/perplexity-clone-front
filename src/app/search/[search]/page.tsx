import ConversationWindow from "@/src/components/Conversation";
import SearchBox from "@/src/components/Search-box";

export default function SearchPage({ params }: { params: { search: string } }) {
  return (
    <div className="flex h-screen flex-col  bg-zinc-50 font-sans dark:bg-black relative">
      <div className="h-7 bg-amber-200  z-10 w-full"></div>
      <div className="flex-1 overflow-hidden ">
        <div className=" h-full overflow-auto  ">
          <ConversationWindow />
        </div>
      </div>
      <footer>
        <div className="max-w-3xl mx-auto pt-3">
          <SearchBox />
        </div>
      </footer>
    </div>
  );
}
