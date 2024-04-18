import { z } from "zod";

export const bookingSchema = z.object({
  postcode: z.string().min(1, "Postcode is required"),
  rooms: z.string().min(1, "Bathrooms is required"),
  bathrooms: z.string().min(1, "Bathrooms is required"),
  clean_type: z.string().min(1, "deep_clean is required"),
  // extra_task: z.string().optional(),
  hours: z.string().min(1, "hours is required"),
  cleaning_product: z.string().min(1, "cleaning product is required"),
  frequency: z.string().min(1, "frequency is required"),
  access_type: z.string().min(1, "house access type is required"),
  house_access: z.string().min(1, "house access is required"),
  pets: z.string().min(1, "specify if you have any pet"),
  notes: z.string().optional(),
  pet_type: z.string().optional(),
  booking_date: z.string().min(1, "cleaning date is required"),
  booking_time: z.string().min(1, "Time is required"),
  fullname: z.string().min(1, "Full Name is required"),
  phone_number: z.string().min(1, "Phone number is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  address: z.string().min(3, "Address is required"),
  city: z.string().min(1, "City is required"),
  amount: z.string().min(1, "Amount is required"),
  // payment_status: z.number().min(1, "Amount is required"),
});

export const RegisterSchema = z
  .object({
    name: z.string().min(1, {
      message: "Name is required",
    }),
    phone_number: z.string().min(3, { message: "Please enter phone number" }),
    address: z.string().min(3, { message: "Please enter your address" }),
    city: z.string().min(3, { message: "Please enter your city" }),
    email: z.string().email({
      message: "Email is required",
    }),
    password: z.string().min(6, {
      message: "Minimum 6 characters required",
    }),
    confirmPassword: z
      .string()
      .min(6, "Enter confirm password")
      .max(50, "Password must be less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });

export const NewPasswordSchema = z.object({
  password: z.string().min(6, {
    message: "Minimum of 6 characters required",
  }),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const LoginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
  code: z.optional(z.string()),
});

export enum CleaningStatus {
  PENDING = "PENDING",
  COMPLETED = "COMPLETED",
  CANCELED = "CANCELED",
}
