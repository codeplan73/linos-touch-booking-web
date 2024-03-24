"use client";

import { useState } from "react";

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

const MultiStepForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Submit form data here
    console.log("Form data submitted:", formData);
  };

  const goToNextStep = () => setCurrentStep((prevStep) => prevStep + 1);

  const goToPrevStep = () => setCurrentStep((prevStep) => prevStep - 1);

  return (
    <form onSubmit={handleSubmit} className="mt-20">
      <div className={currentStep === 1 ? "block" : "hidden"}>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          placeholder="First Name"
        />
        <button type="button" onClick={goToNextStep}>
          Next
        </button>
      </div>
      <div className={currentStep === 2 ? "block" : "hidden"}>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <button type="button" onClick={goToPrevStep}>
          Previous
        </button>
        <button type="button" onClick={goToNextStep}>
          Next
        </button>
      </div>
      <div className={currentStep === 3 ? "block" : "hidden"}>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <button type="button" onClick={goToPrevStep}>
          Previous
        </button>
        <button type="button" onClick={goToNextStep}>
          Next
        </button>
      </div>
      <div className={currentStep === 4 ? "block" : "hidden"}>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="button" onClick={goToPrevStep}>
          Previous
        </button>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default MultiStepForm;
