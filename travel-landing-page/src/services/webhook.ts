import { Webhook } from "svix";
import { WebhookEvent } from "@clerk/nextjs/server";

import { API_ROUTES } from "@/constants";
import { APIS } from "@/services";

const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET;

const handleEvent = async (event: WebhookEvent) => {
  const { type, data } = event;

  switch (type) {
    case "user.created": {
      await APIS.post(API_ROUTES.USERS, {
        userId: data.id,
        ...data,
      });

      break;
    }

    case "user.updated": {
      const user = (await APIS.get(`${API_ROUTES.USERS}?userId=${data.id}`))[0];

      if (user?.id) {
        await APIS.put(`${API_ROUTES.USERS}${user?.id}`, data);
      }

      break;
    }

    case "user.deleted": {
      const user = (await APIS.get(`${API_ROUTES.USERS}?userId=${data.id}`))[0];

      if (user?.id) {
        await APIS.delete(`${API_ROUTES.USERS}${user?.id}`);
      }

      break;
    }

    default:
      break;
  }
};

export const webhookHandler = async (req: Request) => {
  if (!WEBHOOK_SECRET) {
    console.error("❌ Missing Clerk Webhook Secret in .env.local");
    return new Response("Server Misconfiguration", { status: 500 });
  }

  const arrayBuffer = await req.arrayBuffer();
  const payload = Buffer.from(arrayBuffer);
  const headers = Object.fromEntries(req.headers.entries());

  const wh = new Webhook(WEBHOOK_SECRET);

  let event;
  try {
    event = wh.verify(payload, headers) as WebhookEvent;
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err);
    return new Response("Invalid signature", { status: 400 });
  }

  if (event) {
    await handleEvent(event);
  }

  return new Response("Webhook processed", { status: 200 });
};
