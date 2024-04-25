"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import Spinner from "@/components/spinner";

import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { RegisterStaffSchema } from "@/schemas";
import InputField from "@/components/form-fields/InputField";
import InputFieldWrapper from "@/components/form-fields/InputFieldWrapper";
import SelectField from "@/components/form-fields/SelectField";

export type RegisterStaffFormData = z.infer<typeof RegisterStaffSchema>;

const NewUserForm = () => {
  const [newEmployeeId, setNewEmployeeId] = useState<string>("");
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, setSubmitting] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("/users/getlastemployeeid")
  //     .then((response) => {
  //       setNewEmployeeId(response.data.new_employee_id);
  //     })
  //     .catch((error) => {
  //       console.error("Failed to fetch new employee ID:", error);
  //     });
  //   console.log("New Employee ID:", newEmployeeId);
  // }, [newEmployeeId]);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<RegisterStaffFormData>({
    resolver: zodResolver(RegisterStaffSchema),
  });

  const router = useRouter();

  const handleRegisterStaff = async (data: RegisterStaffFormData) => {
    try {
      // const { confirmPassword, ...dataWithoutConfirmPassword } = data;
      setSubmitting(true);
      const response = await axios.post("/api/users/staff", data);
      toast.success("Staff registered successfully!");
      router.refresh();
      router.push("/users");
      console.log(response.data);
      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(handleRegisterStaff)}
      className="w-full md:w-10/12 flex flex-col items-start md:gap-4 gap-6 bg-white p-4"
    >
      <InputFieldWrapper>
        <InputField
          label="Fullname"
          register={register}
          placeholder="Full Name"
          type="text"
          errors={errors}
          name="name"
          disabled={isPending}
        />
        <InputField
          label="Phone Number"
          register={register}
          type="text"
          errors={errors}
          name="phone_number"
          disabled={isPending}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <SelectField
          register={register}
          options={[
            { value: "Single", label: "Single" },
            { value: "Married", label: "Married" },
            { value: "Widow", label: "Widow" },
            { value: "Widower", label: "Widower" },
            { value: "Divorced", label: "Divorced" },
          ]}
          label="Marital Status"
          name="marital_status"
          errors={errors}
        />

        <SelectField
          register={register}
          options={[
            { value: "Male", label: "Male" },
            { value: "Female", label: "Female" },
          ]}
          label="Gender"
          name="gender"
          errors={errors}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="Email"
          register={register}
          type="email"
          errors={errors}
          name="email"
          disabled={isPending}
        />
        <InputField
          label="Date of Birth"
          register={register}
          type="date"
          errors={errors}
          name="dob"
          disabled={isPending}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="Address"
          register={register}
          type="text"
          errors={errors}
          name="address"
          disabled={isPending}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="City"
          register={register}
          type="text"
          errors={errors}
          name="city"
          disabled={isPending}
        />
        <InputField
          label="Postal Code"
          register={register}
          type="text"
          errors={errors}
          name="postal_code"
          disabled={isPending}
        />
        <InputField
          label="Nationality"
          register={register}
          type="text"
          errors={errors}
          name="nationality"
          disabled={isPending}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="Employee ID"
          register={register}
          type="text"
          errors={errors}
          name="employee_id"
          disabled={isPending}
        />

        <SelectField
          register={register}
          options={[
            { value: "Full-time", label: "Full-time" },
            { value: "Part-time", label: "Part-time" },
            { value: "Contract", label: "Contract" },
          ]}
          label="Employment Type"
          name="employment_type"
          errors={errors}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="Employment Date"
          register={register}
          type="date"
          errors={errors}
          name="employment_date"
          disabled={isPending}
        />
        <SelectField
          register={register}
          options={[
            { value: "Daily", label: "Daily" },
            { value: "Monday - Friday", label: "Monday - Friday" },
            { value: "Monday - Saturday", label: "Monday - Saturday" },
            { value: "Monday - Sunday", label: "Monday - Sunday" },
            { value: "Selected Days", label: "Selected Days" },
          ]}
          label="Working Days"
          name="working_days"
          errors={errors}
        />
      </InputFieldWrapper>
      <InputFieldWrapper>
        <InputField
          label="Password"
          register={register}
          type="password"
          errors={errors}
          name="password"
          disabled={isPending}
        />
        <InputField
          label="Confirm Password"
          register={register}
          type="password"
          errors={errors}
          name="confirmPassword"
          disabled={isPending}
        />
      </InputFieldWrapper>

      <Button disabled={isPending} className="bg-warningColor" type="submit">
        {isPending && <Spinner />}
        <span className="ml-1"> Submit</span>
      </Button>
    </form>
  );
};

export default NewUserForm;
