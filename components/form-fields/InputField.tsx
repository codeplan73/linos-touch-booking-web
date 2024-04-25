// InputField.tsx
import React from "react";
import { Input } from "@/components/ui/input";

type InputFieldProps = React.ComponentProps<typeof Input> & {
  errors: any;
  register: any;
  label?: string;
  name: string;
  type?: string;
  disabled?: boolean;
  value?: string;
};

const InputField: React.FC<InputFieldProps> = ({
  errors,
  label,
  register,
  name,
  type,
  disabled,
  value,
}) => (
  <div className="w-full space-y-1">
    <label htmlFor={label}>{label}</label>
    <Input
      {...register(name)}
      type={type}
      className={`text-lg p-4   ${errors[name] ? "border-red-500" : ""}`}
      disabled={disabled}
      value={value}
    />
    <p className="text-red-600 text-xs font-extralight">
      {errors[name]?.message}
    </p>
  </div>
);

export default InputField;
