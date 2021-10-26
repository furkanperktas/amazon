import Image from "next/image";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import {
  signIn,
  signOut,
  useSession,
} from "next-auth/client";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { selectItems } from "../slices/basketSlice";

function Header() {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <header className="">
      {/* LEFT */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2 ">
        <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
          <Image
            onClick={() => router.push("/")}
            src="/amazon_logo.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* MIDDLE */}
        <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-yellow-400 hover:bg-yellow-500">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* RIGHT */}
        <div className="text-white flex items-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div
            onClick={!session ? signIn : signOut}
            className="link"
          >
            <p>
              {session
                ? `Hello, ${session.user.name}`
                : "Sign In"}
            </p>
            <p className="font-extrabold md:text-sm">
              Account & Lists
            </p>
          </div>
          <div
            className="link"
            onClick={() =>
              session && router.push("/orders")
            }
          >
            <p>Returns</p>
            <p className="font-extrabold md:text-sm">
              & Orders
            </p>
          </div>
          <div
            onClick={() => router.push("/checkout")}
            className="relative link flex items-center"
          >
            <span className="absolute top-0 right-0 md:right-10 h-4 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
              {items.length}
            </span>
            <ShoppingCartIcon className="h-10" />
            <p className="hidden md:inline font-extrabold md:text-sm mt-2">
              Basket
            </p>
          </div>
        </div>
      </div>
      {/* BOTTOM NAV */}
      <div className="flex items-center space-x-3 p-2 bg-amazon_blue-light text-white text-xs sm:text-sm">
        <p className="link flex items-center font-bold">
          <MenuIcon className="h-6 mr-1" />
          All
        </p>
        <p className="link">Best Sellers</p>
        <p className="link">Customer Service</p>
        <p className="link flex items-center">
          Prime
          <ChevronDownIcon className="w-3 h-3 ml-1 mt-1" />
        </p>
        <p className="link hidden sm:inline">
          New Releases
        </p>
        <p className="link hidden sm:inline">Books</p>
        <p className="link hidden md:inline">Prime</p>
        <p className="link hidden md:inline">Pharmacy</p>
        <p className="link hidden md:inline">
          Epic Daily Deals
        </p>
        <p className="link hidden xl:inline">Registry</p>
        <p className="link hidden xl:inline ">Fashion</p>
        <p className="link hidden xl:inline">
          Kindle Books Toys & Games
        </p>
        <p className="link hidden xl:inline">Gift Cards</p>
        <p className="link hidden 2xl:inline">
          Amazon Home
        </p>
        <p className="link hidden 2xl:inline">Automotive</p>
        <p className="link hidden 2xl:inline">Computers</p>
      </div>
    </header>
  );
}

export default Header;
