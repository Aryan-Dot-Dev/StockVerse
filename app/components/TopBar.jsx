import React from 'react';
import { PiCodesandboxLogoFill } from "react-icons/pi";
import { IoMailOutline } from "react-icons/io5";
import { LuBellRing } from "react-icons/lu";
import { Link } from '@remix-run/react';
import { useUser, SignedIn, UserButton } from '@clerk/remix';

const TopBar = () => {
  const { isLoaded, isSignedIn, user } = useUser();

  return (
    <div className="flex items-center justify-between p-4 bg-[#151515]">
      <div className="flex items-center gap-2 text-2xl">
        <PiCodesandboxLogoFill className="fill-[#ffb758]" />
        <span>StockVerse</span>
      </div>
      <div className="flex items-center gap-4 text-xl">
        <IoMailOutline />
        <Link to="/news">
          <LuBellRing />
        </Link>
        <div className="flex items-center gap-2">
          <SignedIn>
            <UserButton />
            {/* Check if user is loaded and signed in before accessing fullName */}
            <span>{isLoaded && isSignedIn && user ? user.firstName : 'Guest'}</span>
          </SignedIn>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
