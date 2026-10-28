import { userApiClient } from '@/lib/userApiClient';
import type { LoginCredentials, LoginResponseData } from '@/types/auth';
import type { ApiSuccessResponse } from '@/types/response';

export async function loginApi(
    credentials: LoginCredentials,
): Promise<LoginResponseData> {
    const response = await userApiClient.post<
        ApiSuccessResponse<LoginResponseData>
    >('/auth/login', credentials);

    return response.data.data;
}