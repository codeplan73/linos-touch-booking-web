"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RegisterStaffSchema } from "@/schemas";
import InputField from "@/components/InputField";

export type RegisterFormData = z.infer<typeof RegisterStaffSchema>;

const NewUserForm = () => {
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setSubmitting] = useState(false);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterFormData>({ resolver: zodResolver(RegisterStaffSchema) });

  const router = useRouter();

  return (
    <form className="w-10/12 flex flex-col items-start gap-2">
      <div className="flex items-start space-x-6 w-full">
        <InputField
          label="Fullname"
          {...register("name")}
          placeholder="Full Name"
          type="text"
          error={errors.name}
        />
        <InputField
          label="Email"
          {...register("email")}
          type="email"
          error={errors.email}
        />
      </div>
      <div className="flex items-start space-x-6 w-full">
        <InputField
          label="Fullname"
          {...register("name")}
          placeholder="Full Name"
          type="text"
          error={errors.name}
        />
        <InputField
          label="Email"
          {...register("email")}
          type="email"
          error={errors.email}
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewUserForm;
