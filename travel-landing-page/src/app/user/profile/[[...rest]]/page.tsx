"use client";

import { useAuth, UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  const { userId } = useAuth();

  if (!userId) {
    return <div>Lorem, ipsum dolor.</div>;
  }
  return <UserProfile routing="path" path="/user/profile" />;
};

export default ProfilePage;
