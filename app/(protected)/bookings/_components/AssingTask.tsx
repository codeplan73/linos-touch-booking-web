"use client";

import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { number, z } from "zod";
import axios from "axios";
import { UpdateBookingSchema } from "@/schemas";
import { User, Booking } from "@prisma/client";

interface AssingTaskProps {
  id: number;
}

export type UpdateBookingSchema = z.infer<typeof UpdateBookingSchema>;

const AssingTask = ({ id }: AssingTaskProps) => {
  const [users, setUsers] = useState([] as User[]);
  const [user, setUser] = useState("");

  useEffect(() => {
    fetch("/api/users")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setUsers(data);
      });
  }, []);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<UpdateBookingSchema>({
    resolver: zodResolver(UpdateBookingSchema),
  });

  const assignTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // try {
    //   const response = await axios.patch("/api/bookings/" + id);
    // } catch (error) {
    //   console.log(error);
    // }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primaryColor" variant="outline">
          Assign Task To Staff
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign New Task {id}</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <form className="grid flex-1 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select User" />
              </SelectTrigger>
              <SelectContent>
                {users &&
                  users.map((user) => (
                    <SelectItem key={user.id} value={user.email}>
                      {user.name}
                    </SelectItem>
                  ))}
              </SelectContent>
            </Select>

            <Button type="submit">Assign Task</Button>
          </form>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AssingTask;
