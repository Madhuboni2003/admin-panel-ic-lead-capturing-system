import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import { loginApi, LoginCredentials } from '@/services/authApi';
import { ApiErrorResponse } from '@/types/response';

export function useLogin() {
    return useMutation<string, AxiosError<ApiErrorResponse>, LoginCredentials>({
        mutationFn: loginApi,

        onSuccess: () => {
            toast.success('Login successful.');
        },

        onError: (error) => {
            toast.error(
                error.response?.data?.message ||
                'Login failed. Please check your email and password.',
            );
        },
    });
}