import { getToken, logOut, saveToken } from '@utils/authUtils';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

const axiosPrivate = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL_API,
  headers: {
    'Content-Type': 'application/json',
  },
});

// check refresh token is expired
function checkRefreshTokenExpired() {
  const { refresh_token } = getToken();
  if (!refresh_token) {
    return true;
  }
  const jwt = jwtDecode(refresh_token);
  const currentTime = Date.now() / 1000;
  if (jwt.exp < currentTime) {
    return true;
  }
  return false;
}

// Add a request interceptor
axiosPrivate.interceptors.request.use(
  (config) => {
    if (
      config.url.indexOf('/auth/login') >= 0 ||
      config.url.indexOf('/auth/register') >= 0
    ) {
      return config;
    }
    if (checkRefreshTokenExpired()) {
      logOut();
      return Promise.reject(new Error('Refresh token is expired'));
    }

    const { access_token } = getToken();
    if (access_token) {
      config.headers.Authorization = `Bearer ${access_token}`;
    }
    return config;
  },
  (error) => {
    logOut();
    return Promise.reject(error);
  },
);

axiosPrivate.interceptors.response.use(
  (response) => {
    return response.data;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const { refresh_token } = getToken();
      try {
        const newAccessToken = await axiosPublic.post('/auth/refresh-token', {
          headers: {
            Authorization: `Bearer ${refresh_token}`,
          },
        });
        saveToken(newAccessToken.access_token, refresh_token);
        originalRequest.headers.Authorization = `Bearer ${newAccessToken.access_token}`;
        return axiosPrivate(originalRequest);
      } catch (err) {
        // Refresh token request failed
        logOut();
      }
    }

    return Promise.reject(error);
  },
);


axiosPublic.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export { axiosPrivate, axiosPublic };
