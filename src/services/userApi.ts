
import { userApiClient } from '@/lib/userApiClient';
import type { Role } from '@/constants/roles';
import type { CreateUserFormValues } from '@/schemas/createUserSchema';
import type { ApiSuccessResponse } from '@/types/response';

export type CreatedUser = {
    id: number;
    fullName: string;
    email: string;
    phoneNo: string;
    role: Role;
    isActive?: boolean;
};

export type CreateUserInvitationResponse =
    ApiSuccessResponse<CreatedUser>;

// Create a user invitation through User-Service.
export async function createUserInvitationApi(
    payload: CreateUserFormValues,
): Promise<CreateUserInvitationResponse> {
    // Read the JWT saved by the existing login flow.
    const token =
        typeof window !== 'undefined'
            ? localStorage.getItem('user-service-token')
            : null;

    if (!token) {
        throw new Error('Session expired. Please sign in again.');
    }

    // Send the invitation request with the authenticated Admin's token.
    const response =
        await userApiClient.post<CreateUserInvitationResponse>(
            '/users/invitations',
            payload,
            {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            },
        );

    return response.data;
}
