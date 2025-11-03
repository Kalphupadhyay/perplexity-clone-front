/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { type AxiosRequestConfig, type AxiosResponse } from "axios";
import { IGenericApiResponse } from "../interfaces/generic-response.interface";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api", // Replace with your API base URL
  timeout: 5000, // Optional timeout
  withCredentials: true, // Include cookies in requests if needed,
  headers: {
    "Content-Type": "application/json",
  },
});
// Flag to prevent multiple refresh token requests
let isRefreshing = false;
let failedQueue: Array<{
  resolve: (value?: any) => void;
  reject: (error: any) => void;
}> = [];

const processQueue = (error: any) => {
  failedQueue.forEach(({ resolve, reject }) => {
    if (error) {
      reject(error);
    } else {
      resolve();
    }
  });

  failedQueue = [];
};

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response) {
      if (error.response.status === 401 && !originalRequest._retry) {
        if (isRefreshing) {
          // If already refreshing, queue this request
          return new Promise((resolve, reject) => {
            failedQueue.push({ resolve, reject });
          })
            .then(() => {
              return axiosInstance(originalRequest);
            })
            .catch((err) => {
              return Promise.reject(err);
            });
        }

        originalRequest._retry = true;
        isRefreshing = true;

        try {
          // Attempt to refresh the token (cookies will be handled automatically)
          //   await authService().getRefreshToken();

          processQueue(null);
          isRefreshing = false;

          // Retry the original request (new cookies will be sent automatically)
          return axiosInstance(originalRequest);
        } catch (refreshError) {
          processQueue(refreshError);
          isRefreshing = false;

          // Refresh failed, logout user
          try {
            // await authService().logoutUser();
            window.location.href = "/login";
          } catch (logoutError) {
            console.error("Logout failed:", logoutError);
            window.location.href = "/login";
          }

          return Promise.reject(refreshError);
        }
      }

      switch (error.response.status) {
        case 403:
          console.error("Forbidden! You don't have permission.");
          break;
        case 404:
          console.error("Resource not found!");
          break;
        case 500:
          console.error("Server error!");
          break;
        default:
          console.error("Error:", error.response.data);
      }
    } else if (error.request) {
      // Request made but no response
      console.error("No response from server");
    } else {
      // Error in request setup
      console.error("Error:", error.message);
    }

    return Promise.reject(error);
  }
);

// HTTP Methods wrapper
export class HTTPMethods {
  static get<T>(url: string, params?: AxiosRequestConfig) {
    return axiosInstance.get<IGenericApiResponse<T>>(url, {
      params,
    });
  }

  static post<Req, Res>(url: string, data?: Req, config?: AxiosRequestConfig) {
    return axiosInstance.post<AxiosResponse<IGenericApiResponse<Res>>>(
      url,
      data,
      config
    );
  }
}
