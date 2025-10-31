export default function SearchPage({ params }: { params: { search: string } }) {
  return (
    <div className="flex min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <div className="mx-auto max-w-threadContentWidth">
        <div className="">
          <h1>Question repeated once again</h1>
          <div className="">
            <div className="">
              <p>Answer</p>
            </div>
          </div>
          <p>Response from ai</p>
        </div>
      </div>
    </div>
  );
}
