import { HTTPMethods } from "../config/api.config";
import { API_CONSTANTS } from "../constants/api.constants";

export const ChatService = () => {
  const chatMessage = async (message: string) => {
    const response = await HTTPMethods.post<{ message: string }, string>(
      API_CONSTANTS.CHAT.MESSAGE,
      {
        message,
      }
    );

    return response.data;
  };

  return { chatMessage };
};
