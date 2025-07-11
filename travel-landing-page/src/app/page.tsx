import { SignedIn, UserButton, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";

import { Loading } from "@/components";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center gap-5 sm:p-20">
      <ClerkLoading>
        <Loading />
      </ClerkLoading>

      <ClerkLoaded>
        <h1 className="font-acme">Home page</h1>
        <SignedIn>
          <UserButton
            showName
            userProfileMode="navigation"
            userProfileUrl="/user/profile"
            appearance={{
              elements: {
                userButton: "rounded-md border border-gray-300 shadow p-2",
                userButtonTrigger: "bg-red-200",
                userButtonOuterIdentifier: "text-white pr-2",
              },
            }}
          />
        </SignedIn>
      </ClerkLoaded>
    </div>
  );
}
