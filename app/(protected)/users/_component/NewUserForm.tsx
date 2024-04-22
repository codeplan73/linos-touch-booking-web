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
    <form className="w-8/12 flex flex-col items-start gap-8">
      <div className="flex items-start space-x-6 w-full">
        <div className="w-full">
          <Input {...register("name")} placeholder="Full Name" type="text" />
          <p className="text-red-600 text-xs font-extralight">
            {errors.name?.message}
          </p>
        </div>
        <div className="w-full">
          <Input
            placeholder="Email"
            {...register("email")}
            type="email"
            className={`${errors.name ? "border-red-500" : ""}`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.email?.message}
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-6 w-full">
        <div className="w-full">
          <Input
            {...register("phone_number")}
            placeholder="Phone Number"
            type="text"
            className={`${errors.phone_number ? "border-red-500" : ""}`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.phone_number?.message}
          </p>
        </div>
        <div className="w-full">
          <Input
            placeholder="Date of Birth"
            {...register("dob")}
            type="date"
            className={`${errors.dob ? "border-red-500" : ""}`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.dob?.message}
          </p>
        </div>
      </div>
      <div className="flex items-start space-x-6 w-full">
        <div className="w-full">
          <Input
            {...register("phone_number")}
            placeholder="Phone Number"
            type="text"
            className={`${errors.phone_number ? "border-red-500" : ""}`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.phone_number?.message}
          </p>
        </div>
        <div className="w-full">
          <Input
            placeholder="Date of Birth"
            {...register("dob")}
            type="date"
            className={`${errors.dob ? "border-red-500" : ""}`}
          />
          <p className="text-red-600 text-xs font-extralight">
            {errors.dob?.message}
          </p>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default NewUserForm;
