"use client";

import { useSession } from "@clerk/nextjs";
import { useEffect, useRef } from "react";
import { toast } from "sonner";

export const useSessionWatcher = () => {
  const { session } = useSession();
  const prevSession = useRef<typeof session>(null);

  useEffect(() => {
    if (prevSession.current && !session) {
      toast.info("Your session has expired. Please sign in again.");
    }
    prevSession.current = session;
  }, [session]);
};
