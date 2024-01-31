import {z} from 'zod';
import {kuepachat} from '@/app/api/api';

let currentUser = '';

export const userValidate = z.object({
    name: z.string().min(1).refine((value) => {
        currentUser = kuepachat.find((u) => u.name === value);
        return currentUser !== undefined;
    },{
        message: 'The name do not match'
    }),
    password: z.string().min(1).refine((value) => {
        return currentUser.password === value;
    },{
        message: 'The password do not match'
    })
});

