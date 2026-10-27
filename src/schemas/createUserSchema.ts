import { z } from 'zod';

import { ROLE_OPTIONS } from '@/constants/roles';

export const createUserSchema = z.object({
    fullName: z
        .string()
        .trim()
        .min(2, 'Name must contain at least 2 characters.')
        .max(50, 'Name cannot exceed 50 characters.'),

    email: z
        .string()
        .trim()
        .email('Enter a valid email address.'),

    phoneNo: z
        .string()
        .trim()
        .regex(
            /^[6-9]\d{9}$/,
            'Enter a valid 10-digit Indian mobile number.',
        ),

    role: z.enum(ROLE_OPTIONS),
});

export type CreateUserFormValues = z.infer<typeof createUserSchema>;