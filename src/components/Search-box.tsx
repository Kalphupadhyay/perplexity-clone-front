"use client";

import { navigate } from "next/dist/client/components/segment-cache-impl/navigation";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

export const SearchBox = () => {
  const { register } = useForm<{ prompt: string }>();
  const router = useRouter();

  const handleVoiceInput = () => {
    router.push("/search/voice-input");
    // Logic for handling voice input goes here
  };

  return (
    <div className="border-gray-50 bg-gray-700 w-2xl h-32 rounded-2xl">
      <div className="px-3.5 py-2 grid-rows-1fr-auto grid grid-cols-3 h-full">
        <div className="overflow-hidden relative flex h-full w-full col-start-1 col-end-4 pb-3">
          <input
            {...register("prompt")}
            type="text"
            placeholder="Ask me anything..."
            className="border-none  w-full outline-0 text-white"
          />
        </div>
        <div className="flex items-center justify-self-end col-start-3 row-start-2">
          <button
            className="
                focus-visible:bg-subtle hover:bg-subtle text-quiet  hover:text-foreground dark:hover:bg-subtle max-w-24 sm:max-w-none font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button font-semimedium justify-center text-center items-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-9/8"
          >
            <span className="material-symbols-outlined text-base!">globe</span>
          </button>
          <button
            className="
                focus-visible:bg-subtle hover:bg-subtle text-quiet  hover:text-foreground dark:hover:bg-subtle max-w-24 sm:max-w-none font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button font-semimedium justify-center text-center items-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-9/8"
          >
            <span className="material-symbols-outlined text-base!">
              attach_file
            </span>
          </button>
          <button
            className="
                focus-visible:bg-subtle hover:bg-subtle text-quiet  hover:text-foreground dark:hover:bg-subtle max-w-24 sm:max-w-none font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button font-semimedium justify-center text-center items-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-9/8"
          >
            <span className="material-symbols-outlined text-base!">memory</span>
          </button>
          <button
            className="
                focus-visible:bg-subtle hover:bg-subtle text-quiet  hover:text-foreground dark:hover:bg-subtle max-w-24 sm:max-w-none font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button font-semimedium justify-center text-center items-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-9/8"
          >
            <span className="material-symbols-outlined text-base!">mic</span>
          </button>
          <div className="bg-amber-700 rounded">
            <button
              onClick={handleVoiceInput}
              className="
                focus-visible:bg-subtle hover:bg-subtle text-quiet  hover:text-foreground dark:hover:bg-subtle max-w-24 sm:max-w-none font-sans focus:outline-none outline-none outline-transparent transition duration-300 ease-out select-none relative group/button font-semimedium justify-center text-center items-center rounded-lg cursor-pointer active:scale-[0.97] active:duration-150 active:ease-outExpo origin-center whitespace-nowrap inline-flex text-sm h-8 aspect-9/8"
            >
              <span className="material-symbols-outlined text-base! ">
                arrow_forward
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
