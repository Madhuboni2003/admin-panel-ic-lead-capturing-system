
import { useMutation } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toast } from 'sonner';

import {
    createUserInvitationApi,
    CreateUserInvitationResponse,
} from '@/services/userApi';
import { CreateUserFormValues } from '@/schemas/createUserSchema';
import { ApiErrorResponse } from '@/types/response';

export function useCreateUser() {
    return useMutation<
        CreateUserInvitationResponse,
        AxiosError<ApiErrorResponse>,
        CreateUserFormValues
    >({
        mutationFn: createUserInvitationApi,

        onSuccess: (response) => {
            toast.success(response.message || 'User created successfully.');
        },

        onError: (error) => {
            toast.error(
                error.response?.data?.message ||
                    'Failed to create user. Please try again.',
            );
        },
    });
}
