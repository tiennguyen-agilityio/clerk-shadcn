import React from "react";
import Link from "next/link";

import { NAV_FOOTERS } from "@/constants/nav";

import Button from "@/components/Button";

const TopNav = () => {
  return (
    <div className="container mx-auto py-8 sm:py-12 lg:py-25 font-acme">
      <div className="flex justify-between">
        <div>
          <h3 className="font-bold text-[13px] mb-3">Need Travelsy Help?</h3>
          <p className="mb-1 text-[13px]">Got Questions? Call us 24/7!</p>
          <p className="mb-1 text-[13px]">
            Call Us:{" "}
            <a href="tel:+254716909815" className="hover:underline">
              +254 716909 815
            </a>
          </p>
          <p className="text-xs">
            Email Us:{" "}
            <a href="mailto:info@travelsy.com" className="text-blue-600 hover:underline text-xs">
              info@travelsy.com
            </a>
          </p>
          <h4 className="font-bold text-[13px] mt-4">Contact Info:</h4>
          <p className="text-[13px]">
            2nd Floor, Fedha Plaza,
            <br />
            Westlands, Nairobi, Kenya.
          </p>
          <p className="text-xs">
            P.O Box 7231-00300
            <br />
            Nairobi, Kenya
          </p>
          <div className="flex space-x-3 mt-3 text-[10px]">
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-sidebar-accent">
              Tw
            </button>
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-sidebar-accent">
              Ins
            </button>
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-sidebar-accent">
              You
            </button>
          </div>
        </div>

        {NAV_FOOTERS?.map(({ label = "", links = [] }, index) => (
          <div key={index}>
            <h3 className="font-bold text-[13px] mb-3">{label}</h3>
            <div className="flex flex-col gap-2.5">
              {links?.map(({ text = "", href = "" }, currentIndex) => (
                <Link className="text-xs w-fit" key={currentIndex} href={href}>
                  {text}
                </Link>
              ))}
            </div>
          </div>
        ))}

        <div className="max-w-[355px]">
          <h3 className="font-bold text-[13px] mb-3">Mailing List</h3>
          <p className="text-xs mb-3">
            Sign up for our mailing list and get the latest offers and promotions straight in your
            inbox.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Your Email"
              className="p-2 border border-border rounded-l-md w-full"
            />
            <Button className=" px-4 rounded-r-md rounded-tl-none rounded-bl-none">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
