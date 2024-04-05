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
  amount: z.number().min(1, "Amount is required"),
  // payment_status: z.number().min(1, "Amount is required"),
});

export const userSchema = z
  .object({
    fullname: z.string().min(3, "Please enter your fullname"),
    phone_number: z.string().min(3, "Please enter phone number"),
    address: z.string().min(3, "Please enter your address"),
    city: z.string().min(3, "Please enter your city"),
    email: z.string().email("Please enter a valid email address"),
    password: z.string().min(6, "Please enter password"),
    confirmPassword: z
      .string()
      .min(6, "Enter confirm password")
      .max(50, "Password must be less than 50 characters"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });
