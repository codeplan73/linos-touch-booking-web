// InputField.tsx
import React from "react";
import { FieldError } from "react-hook-form";
import { Input } from "@/components/ui/input";

type InputFieldProps = React.ComponentProps<typeof Input> & {
  error?: FieldError;
  label?: string;
};

const InputField: React.FC<InputFieldProps> = ({ error, label, ...props }) => (
  <div className="w-full space-y-2">
    <label htmlFor={label}>{label}</label>
    <Input
      {...props}
      className={`text-lg p-4  ${error ? "border-red-500" : ""}`}
    />
    <p className="text-red-600 text-xs font-extralight">{error?.message}</p>
  </div>
);

export default InputField;
