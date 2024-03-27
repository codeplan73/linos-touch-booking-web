import { z } from "zod";

export const FormSchema = z.object({
  firstName: z.string().min(1, "First name is required"),
  lastName: z.string().min(1, "Last name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  country: z.string().min(1, "Country is required"),
  street: z.string().min(1, "Street is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  zip: z.string().min(1, "Zip is required"),
  post_code: z.string().min(1, "Postcode is required"),
  bathrooms: z.string().min(1, "Bathrooms is required"),
  rooms: z.string().min(1, "Bathrooms is required"),
  clean_type: z.string().min(1, "deep_clean is required"),
});
