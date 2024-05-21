import * as z from "zod";

export const ContactSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
  name: z.string().min(1, { message: "Please enter your name" }),
  message: z
    .string()
    .min(6, { message: "Message must be at least 6 characters long" }),
});
