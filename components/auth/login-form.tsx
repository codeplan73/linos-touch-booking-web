"use client";

import { z } from "zod";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import axios from "axios";

import { LoginSchema } from "@/schemas";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import AuthCardWrapper from "./AuthCardWrapper";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { toast } from "react-toastify";
import { signIn } from "next-auth/react";
import { login } from "@/actions/login";

const LoginForm = () => {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl");
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");
  const [isPending, startTransition] = useTransition();

  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  // const onSubmit = (values: z.infer<typeof LoginSchema>) => {
  //   setError("");
  //   setSuccess("");

  //   startTransition(() => {
  //     login(values, callbackUrl)
  //       .then((data) => {
  //         if (data?.error) {
  //           form.reset();
  //           setError(data.error);
  //         }

  //         if (data?.success) {
  //           form.reset();
  //           setSuccess(data.success);
  //         }
  //       })
  //       .catch(() => setError("Something went wrong"));
  //   });
  // };

  const onSubmit = async (values: z.infer<typeof LoginSchema>) => {
    try {
      await axios.post("/api/auth/login", values);
    } catch (error) {
      console.log(error);
    }

    // startTransition(async () => {
    //   console.log(values, callbackUrl);

    //   try {

    //     // const data = response.data;

    //     // if (response.status !== 200) {
    //     //   form.reset();
    //     //   setError(data.error);
    //     //   return;
    //     // }

    //     // if (data.success) {
    //     //   form.reset();
    //     //   setSuccess(data.success);
    //     // }

    //     // if (data.twoFactor) {
    //     //   setShowTwoFactor(true);
    //     // }
    //   } catch (error) {
    //     console.log(error);
    //   }
    // });
  };

  return (
    <AuthCardWrapper textLabel="Please Login Here" headerLabel="Welcome">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="w-full md:w-8/12 space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Enter Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="Enter Password"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center justify-between">
            <div className="items-top flex space-x-2">
              <Checkbox
                id="terms1"
                className="bg-warningColor text-white checked:bg-warningColor border-warningColor"
              />
              <div className="grid gap-1.5 leading-none">
                <label
                  htmlFor="terms1"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Remember Me
                </label>
              </div>
            </div>
            <Link href="/forgotpassword" className="text-warningColor">
              Forgot Password
            </Link>
          </div>

          <Button type="submit" className="w-full bg-warningColor">
            Login
          </Button>
        </form>
      </Form>
    </AuthCardWrapper>
  );
};

export default LoginForm;
