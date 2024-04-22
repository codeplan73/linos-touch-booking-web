"use client";

import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { User, Booking } from "@prisma/client";

const AssignTask = ({ id }: { id: number }) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  // Fetch users using React Query
  const { data: users, error, isLoading } = useUsers();

  // Function to assign a task
  const assignTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // alert(`Assigning Task to ${selectedUser}`);
    console.log(selectedUser, id);
    // try {
    //   // Assuming you have an API endpoint for updating task assignment
    //   const response = await axios.patch(`/api/bookings/${id}`, {
    //     userId: selectedUser,
    //   });
    //   // Handle response as needed
    // } catch (error) {
    //   console.error("Error assigning task:", error);
    // }
  };

  // Render the component
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="bg-primaryColor" variant="outline">
          Assign Task To Staff {id}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Assign New Task</DialogTitle>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <form onSubmit={assignTask} className="grid flex-1 gap-4">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select User" />
              </SelectTrigger>
              <SelectContent>
                {users?.map((user: User) => (
                  <SelectItem
                    key={user.id}
                    value={user.id}
                    onClick={() => {
                      console.log("User ID:", user.id);
                      setSelectedUser(user.id);
                    }}
                  >
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

const useUsers = () =>
  useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

export default AssignTask;
