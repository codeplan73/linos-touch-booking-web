import Link from "next/link";
import { IoMenuSharp } from "react-icons/io5";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  const user = session?.user;
  return (
    <nav className="w-full mx-auto px-5 py-5 flex items-center space-x-2  shadow-xl z-10 sticky top-0 bg-white">
      <ul className="flex items-center justify-between w-full space-x-4">
        {/* <ul className="flex items-center justify-between md:justify-end w-full space-x-4"> */}
        <IoMenuSharp className="block cursor-pointer text-2xl" />
        <IoMenuSharp className="block md:hidden cursor-pointer text-2xl" />
        <Link href="/dashboard">{user?.name}</Link>
      </ul>
    </nav>
  );
};

export default Navbar;
