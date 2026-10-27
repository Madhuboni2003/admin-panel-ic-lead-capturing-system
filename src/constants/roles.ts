
export const ROLE = {
    ADMIN: 'admin',
    MANAGER: 'manager',
} as const;

export const ROLE_OPTIONS = [ROLE.ADMIN, ROLE.MANAGER] as const;

export type Role = (typeof ROLE)[keyof typeof ROLE];
