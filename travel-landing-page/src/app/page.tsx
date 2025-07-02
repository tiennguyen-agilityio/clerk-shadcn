import { SignInButton, SignOutButton, SignUpButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";

export default async function Home() {
  const { userId } = await auth();

  console.log("userId", userId);

  if (!userId) {
    return (
      <div>
        <div>Sign in to view this page</div>
        <div>
          <SignInButton />
        </div>
        <div>
          <SignUpButton />
        </div>
      </div>
    );
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <h1>Heading</h1>
        <SignOutButton />
      </main>
    </div>
  );
}
