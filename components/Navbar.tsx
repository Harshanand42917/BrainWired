import Link from "next/link";
import Image from "next/image";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import NavbarItems from "./NavbarItems";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link href="/">
        <div className="flex items-center gap-2.5 cursor-pointer transition-transform duration-300 hover:scale-105 hover:rotate-1 hover:shadow-lg">
          <Image src="/images/file.svg" alt="logo" width={60} height={55} />
        </div>
      </Link>
      <div className="flex items-center gap-8">
        <NavbarItems />
        <SignedOut>
          <SignInButton>
            <button className="btn-signin">Sign In</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
