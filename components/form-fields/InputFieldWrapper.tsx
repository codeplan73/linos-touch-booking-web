import React from "react";

interface CardWrapperProps {
  children: React.ReactNode;
}

const InputFieldWrapper = ({ children }: CardWrapperProps) => {
  return (
    <div className="w-full flex flex-col md:flex-row items-start space-y-6 md:space-y-0 md:space-x-6 ">
      {children}
    </div>
  );
};

export default InputFieldWrapper;
