"use client";

import React, { useEffect, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import Spinner from "@/components/spinner";
import BreadCumNav from "@/components/BreadCumNav";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { priceSchema } from "@/schemas/index";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import InputFieldPrice from "@/components/form-fields/InputFieldPrice";

export type priceFormData = z.infer<typeof priceSchema>;

const PricePage = () => {
  const router = useRouter();
  const [isPending, setSubmitting] = useState(false);
  const [price, setPrice] = useState<priceFormData | null>(null);
  const [priceId, setPriceId] = useState("");

  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<priceFormData>({
    resolver: zodResolver(priceSchema),
  });

  useEffect(() => {
    const getPrice = async () => {
      try {
        const res = await axios.get("/api/settings/price");
        setPrice(res.data[0]);
        setPriceId(res.data[0].id);

        for (const key in res.data[0]) {
          setValue(key as keyof priceFormData, res.data[0][key].toString());
        }
      } catch (error) {
        console.error(error);
      }
    };

    getPrice();
  }, [setPrice, setValue]);

  const handlePriceUpdate = async (data: priceFormData) => {
    const formData = { ...data, priceId };
    console.log(formData);
    try {
      setSubmitting(true);
      const response = await axios.post("/api/settings/price", formData);
      console.log(response);
      toast.success(response.data.message);
      router.push("/settings");
      setSubmitting(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <BreadCumNav
        dashboard="dashboard"
        currentPage="settings"
        currentSection="Price Settings"
      />

      <div className="py-4 bg-whites">
        <Card className="w-full md:w-8/12">
          <CardContent>
            <form
              onSubmit={handleSubmit(handlePriceUpdate)}
              className="grid py-4 items-center gap-6"
            >
              <CardTitle>Service Base Price</CardTitle>

              <Controller
                name="hourly_rate"
                control={control}
                defaultValue={price?.hourly_rate}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Hourly Rate"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />

              <CardTitle className="mt-4">
                Individual Additions Price setting
              </CardTitle>

              <Controller
                name="bedroom_count"
                control={control}
                defaultValue={price?.bedroom_count}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Bedroom Count (per1)"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />

              <CardTitle className="mt-4">Clean Type</CardTitle>

              <Controller
                name="standard"
                control={control}
                defaultValue={price?.standard}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Standard"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />
              <Controller
                name="deep_clean"
                control={control}
                defaultValue={price?.deep_clean}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Deep Cleen"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />
              <Controller
                name="move_in_out"
                control={control}
                defaultValue={price?.move_in_out}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Move in/out"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />
              <Controller
                name="post_construction"
                control={control}
                defaultValue={price?.post_construction}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Post Construction"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />

              <CardTitle className="mt-4">Extra Task</CardTitle>

              <Controller
                name="extra_task"
                control={control}
                defaultValue={price?.extra_task}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Extra Task"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />
              <Controller
                name="bring_our_own_materials"
                control={control}
                defaultValue={price?.bring_our_own_materials}
                render={({ field }) => (
                  <InputFieldPrice
                    {...field}
                    control={control} // <-- add this
                    errors={errors}
                    label="Bring our own materials"
                    placeholder="Write amount"
                    disabled={isPending}
                  />
                )}
              />

              <Button
                disabled={isPending}
                type="submit"
                className="bg-warningColor mt- space-x-2"
              >
                <span className=""> Update Price</span>
                {isPending && <Spinner />}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricePage;
