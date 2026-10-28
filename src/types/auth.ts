export type LoginCredentials = {
    email: string;
    password: string;
};

export type AuthenticatedUser = {
    publicId: string;
    name: string;
    email: string;
    role: 'ADMIN' | 'MANAGER';
};

export type LoginResponseData =
    | {
          requiresPasswordReset: true;
          tokenType: 'password_reset';
      }
    | {
          requiresPasswordReset: false;
          tokenType: 'access';
          user: AuthenticatedUser;
      };