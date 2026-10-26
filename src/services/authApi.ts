
import { userApiClient } from '@/lib/userApiClient';
import { ApiSuccessResponse } from '@/types/response';

export type LoginCredentials = {
    email: string;
    password: string;
};

// Authenticate the user and return the JWT issued by User-Service.
export async function loginApi(credentials: LoginCredentials): Promise<string> {
    const response = await userApiClient.post<ApiSuccessResponse<string>>(
        '/auth/login',
        credentials,
    );

    return response.data.data;
}
