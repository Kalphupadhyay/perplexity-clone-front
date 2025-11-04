const API_VERSION = {
  AUTH: "v1",
  CHAT: "v1",
  // add more modules if needed
};

const API = {
  AUTH: `${API_VERSION.AUTH}/auth`,
  CHAT: `${API_VERSION.CHAT}/chat`,
};

export const API_CONSTANTS = {
  AUTH: {
    LOGIN: `${API.AUTH}/login`,
    REGISTER: `${API.AUTH}/register`,
    LOGOUT: `${API.AUTH}/logout`,
    REFRESH_TOKEN: `${API.AUTH}/refresh-token`,
    CURRENT_USER: `${API.AUTH}/current-user`,
  },
  CHAT: {
    STREAM: `${API.CHAT}/stream/`,
  },
};
