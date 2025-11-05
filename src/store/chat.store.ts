import { create } from "zustand";

type IInputMessageStore = {
  message: string;
  addMessage: (message: string) => void;
  clearMessage: () => void;
  isAiResponding: boolean;
  setIsAiResponding: (isAiResponding: boolean) => void;
};
export const useInputStore = create<IInputMessageStore>((set) => {
  return {
    message: "",
    addMessage: (message: string) => {
      return set({
        message,
      });
    },
    clearMessage: () => set({ message: "" }),
    isAiResponding: false,
    setIsAiResponding: (isAiResponding: boolean) => set({ isAiResponding }),
  };
});
