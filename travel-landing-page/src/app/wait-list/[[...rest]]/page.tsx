import { Waitlist } from "@clerk/nextjs";

const WaitListPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-fit py-15 pt-35">
      <Waitlist />
    </div>
  );
};

export default WaitListPage;
