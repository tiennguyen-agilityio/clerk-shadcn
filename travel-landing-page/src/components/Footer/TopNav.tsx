import Link from "next/link";
import React from "react";

const TopNav = () => {
  return (
    <div className="max-w-7xl mx-auto py-8 sm:py-12 lg:py-25 font-acme">
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
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-200">
              Tw
            </button>
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-200">
              Ins
            </button>
            <button className="w-8 h-8 border rounded-full flex items-center justify-center hover:bg-gray-200">
              You
            </button>
          </div>
        </div>

        <div>
          <h3 className="font-bold text-[13px] mb-3">Company</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/about" className="hover:text-orange-500">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-orange-500">
                Careers
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-orange-500">
                Terms Of Use
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-500">
                Privacy Statement
              </Link>
            </li>
            <li>
              <Link href="/feedback" className="hover:text-orange-500">
                Give Us Feedback
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-orange-500">
                Partner With Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[13px] mb-3">Other Services & Support</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/rewards" className="hover:text-orange-500">
                Rewards Program
              </Link>
            </li>
            <li>
              <Link href="/partners" className="hover:text-orange-500">
                Partners
              </Link>
            </li>
            <li>
              <Link href="/legal" className="hover:text-orange-500">
                Legal
              </Link>
            </li>
            <li>
              <Link href="/privacy" className="hover:text-orange-500">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-orange-500">
                Customer Service Help
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-bold text-[13px] mb-3">Quick Links</h3>
          <ul className="space-y-2 text-xs">
            <li>
              <Link href="/account" className="hover:text-orange-500">
                Your Account
              </Link>
            </li>
            <li>
              <Link href="/camping" className="hover:text-orange-500">
                Camping Locations
              </Link>
            </li>
            <li>
              <Link href="/activities" className="hover:text-orange-500">
                Activities
              </Link>
            </li>
            <li>
              <Link href="/equipment" className="hover:text-orange-500">
                Hire Equipment
              </Link>
            </li>
            <li>
              <Link href="/blog" className="hover:text-orange-500">
                Blogs
              </Link>
            </li>
          </ul>
        </div>

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
              className="p-2 border border-gray-300 rounded-l-md w-full"
            />
            <button className="bg-orange-500 text-white px-4 rounded-r-md hover:bg-orange-600">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopNav;
