import React from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const FormField: React.FC<{
  label: string;
  name: string;
  type?: string;
  options?: string[];
  register: any;
  errors: any;
}> = ({ label, name, type = "text", options, register, errors }) => {
  return (
    <div className="flex flex-col space-y-2">
      <label
        htmlFor={name}
        className="block text-md font-medium semibold leading-6 text-gray-900"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <Textarea
          {...register(name)}
          className="placeholder:text-slate-400 text-lg py-6 focus:border-blue-700"
        />
      ) : type === "select" ? (
        <select
          {...register(name)}
          className="w-full rounded-md border px-4 py-4"
        >
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : (
        <Input
          type={type}
          {...register(name)}
          className="placeholder:text-slate-400 text-lg py-6 focus:border-blue-700"
        />
      )}

      {errors[name]?.message && (
        <p className="mt-2 text-sm text-red-400">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormField;
