import axios from 'axios';

// User-Service: authentication and current-user APIs.
export const userApiClient = axios.create({
    baseURL: process.env.NEXT_PUBLIC_USER_SERVICE_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    }
});