import { SearchBox } from "../components/Search-box";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl">Perplexity clone</h1>
        <SearchBox />
      </div>
    </div>
  );
}
