import React from "react";
import BreadCumNav from "@/components/BreadCumNav";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

const PricePage = () => {
  return (
    <div>
      <BreadCumNav
        dashboard="dashboard"
        currentPage="settings"
        currentSection="Price Settings"
      />
      <div className="p-4 bg-whites">
        <Card className="w-full md:w-6/12">
          <CardContent>
            <form className="grid py-4 items-center gap-6">
              <CardTitle>Service Base Price</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Hourly Rate Base Price</Label>
                <Input id="name" type="text" placeholder="Write amount here" />
              </div>

              <CardTitle className="mt-4">
                Individual Additions Price setting
              </CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Bedroom Count (per1)</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Bathroom Count (per1)</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>

              <CardTitle className="mt-4">Clean Type</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Standard</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Deep Clean</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Move in/out</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Post Construction</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>

              <CardTitle className="mt-4">Extra Task</CardTitle>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Extra Task (per 1)</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Bring our own materials</Label>
                <Input id="name" type="text" placeholder="Write amount" />
              </div>

              <Button type="submit" className="bg-warningColor mt-6">
                Update Price
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default PricePage;
