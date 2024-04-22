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
import { User } from "@prisma/client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const AssignTask = ({ id }: { id: number }) => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);
  const { data: users, error, isLoading } = useUsers();
  const router = useRouter();

  // Function to assign a task
  const assignTask = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      // Assuming you have an API endpoint for updating task assignment
      const response = await axios.patch(`/api/bookings/${id}`, {
        userId: selectedUser,
      });

      console.log(response.data);

      if (response.data || response.status == 200) {
        toast.success(`Task have been successfully assigned`);
        router.refresh();
        router.push("/bookings");
      }
      // Handle response as needed
    } catch (error) {
      console.error("Error assigning task:", error);
    }
  };

  const handleSelectUser = (userId: string) => {
    setSelectedUser(userId);
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
            <select
              className="border p-3 rounded-lg"
              onChange={(e) => handleSelectUser(e.target.value)}
            >
              <option value="">Select User</option>
              {users?.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
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
