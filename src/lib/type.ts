import {z} from "zod"

export const EditUserProfileschema = z.object ({
    email: z.string().email('required'),
    name: z.string().min (1,'required'),
})