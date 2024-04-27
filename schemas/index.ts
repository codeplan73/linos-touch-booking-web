import { z } from "zod";

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

const baseBookingSchema = {
  postcode: z.string().min(1, "Postcode is required"),
  rooms: z.string().min(1, "Bathrooms is required"),
  bathrooms: z.string().min(1, "Bathrooms is required"),
  clean_type: z.string().min(1, "deep_clean is required"),
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
  review: z.optional(z.string()),
  payment_intent: z.optional(z.string()),
  payment_method: z.optional(z.string()),
  payment_currency: z.optional(z.string()),
  payment_date: z.optional(z.string()),
};

export const bookingSchema = z.object(baseBookingSchema);

export const UpdateBookingSchema = z.object({
  ...baseBookingSchema,
  assignedToUserId: z.string().min(1, "Assign to user is required"),
});

const baseRegisterSchema = {
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
};

export const RegisterSchema = z
  .object(baseRegisterSchema)
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });

export const RegisterStaffSchema = z
  .object({
    ...baseRegisterSchema,
    marital_status: z
      .string()
      .min(3, { message: "marital status is required" }),
    nationality: z.string().min(3, { message: "Nationality is required" }),
    dob: z.string().min(3, { message: "Date of birth is required" }),
    gender: z.string().min(3, { message: "Please select your gender" }),
    postal_code: z.string().min(3, { message: "Please enter your Postcode" }),
    employee_id: z.string().min(3, { message: "Employee ID is required" }),
    employment_date: z
      .string()
      .min(3, { message: "Please enter your joining date" }),
    employment_type: z
      .string()
      .min(3, { message: "Please enter your employment type" }),
    working_days: z.string().min(3, { message: "Working days required" }),
    // status: z.string().min(3, { message: "Please enter Work status" }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Password and confirm password doesn't match!",
    path: ["confirmPassword"],
  });

const baseUpdateSchema = {
  name: baseRegisterSchema.name,
  phone_number: baseRegisterSchema.phone_number,
  address: baseRegisterSchema.address,
  city: baseRegisterSchema.city,
  email: baseRegisterSchema.email,
  marital_status: z.string().min(3, { message: "marital status is required" }),
  nationality: z.string().min(3, { message: "Nationality is required" }),
  dob: z.string().min(3, { message: "Date of birth is required" }),
  gender: z.string().min(3, { message: "Please select your gender" }),
  postal_code: z.string().min(3, { message: "Please enter your Postcode" }),
  employee_id: z.string().min(3, { message: "Employee ID is required" }),
  employment_date: z
    .string()
    .min(3, { message: "Please enter your joining date" }),
  employment_type: z
    .string()
    .min(3, { message: "Please enter your employment type" }),
  working_days: z.string().min(3, { message: "Working days required" }),
  // status: z.string().min(3, { message: "Please enter Work status" }),
};

export const UpdateStaffSchema = z.object(baseUpdateSchema);

export const priceSchema = z.object({
  id: z.string().min(1, { message: "Id is required" }),
  hourly_rate: z.string().min(1, { message: "Hourly Rate is required" }),
  bedroom_count: z.string().min(1, { message: "bedroom amount is required" }),
  bathroom_count: z.string().min(1, { message: "bathroom amount is required" }),
  standard: z.string().min(1, { message: "standard amount is required" }),
  deep_clean: z.string().min(1, { message: "deep clean amount is required" }),
  move_in_out: z.string().min(1, { message: "Move in/out price is required" }),
  post_construction: z
    .string()
    .min(1, { message: "Post Construction amount is required" }),
  extra_task: z.string().min(1, { message: "Extra task amount is required" }),
  bring_our_own_materials: z
    .string()
    .min(1, { message: "Our material price is required" }),
});

// const priceSchemaWithId = priceSchema.extend({
//   id: z.string(),
// });
// export type priceData = z.infer<typeof priceSchemaWithId>;
