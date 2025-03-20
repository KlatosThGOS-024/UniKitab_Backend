import { z } from "zod";
interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const runTimeUserSchemaSignUp = z.object({
  fullName: z.object({
    firstName: z.string(),
    lastName: z.string(),
  }),
  email: z.string().email("Not a valid email"),
  password: z
    .string()
    .regex(
      /^[A-Z].*[a-z].*[0-9].*[^A-Za-z0-9].{8,}$/,
      "Password must contain at least one uppercase, one lowercase, one number, one special character, and be at least 8 characters long"
    ),
});
const runTimeUserSchemaLogin = z.object({
  email: z.string().email("Not a valid email"),
  password: z.string(),
});

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
export { IUser, runTimeUserSchemaSignUp, runTimeUserSchemaLogin };
