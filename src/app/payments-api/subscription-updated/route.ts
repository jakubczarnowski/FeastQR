import crypto from "crypto";
import { type listAllSubscriptions } from "lemonsqueezy.ts";
import { type NextRequest } from "next/server";
import { env } from "~/env.mjs";
import { supabase } from "~/server/supabase/supabaseClient";

// Put this in your billing lib and just import the type instead
type LemonsqueezySubscription = Awaited<
  ReturnType<typeof listAllSubscriptions>
>["data"][number];

export type SubscriptionStatus =
  LemonsqueezySubscription["attributes"]["status"];

const isError = (error: unknown): error is Error => {
  return error instanceof Error;
};

export const runtime = "nodejs";

// Add more events here if you want
// https://docs.lemonsqueezy.com/api/webhooks#event-types
type EventName =
  | "order_created"
  | "order_refunded"
  | "subscription_created"
  | "subscription_cancelled"
  | "subscription_resumed"
  | "subscription_expired"
  | "subscription_paused"
  | "subscription_unpaused"
  | "subscription_payment_failed"
  | "subscription_payment_success"
  | "subscription_payment_recovered"
  | "subscription_updated";

type Payload = {
  meta: {
    test_mode: boolean;
    event_name: EventName;
    custom_data: { userId: string };
  };
  // Possibly not accurate: it's missing the relationships field and any custom data you add
  data: LemonsqueezySubscription;
};

export const POST = async (request: NextRequest) => {
  try {
    const text = await request.text();
    const hmac = crypto.createHmac(
      "sha256",
      env.LEMONS_SQUEEZY_SIGNATURE_SECRET,
    );
    const digest = Buffer.from(hmac.update(text).digest("hex"), "utf8");
    const signature = Buffer.from(
      request.headers.get("x-signature") as string,
      "utf8",
    );

    if (!crypto.timingSafeEqual(digest, signature)) {
      return new Response("Invalid signature.", {
        status: 400,
      });
    }

    const payload = JSON.parse(text) as Payload;
    const {
      meta: { event_name: eventName, custom_data },
      data: subscription,
    } = payload;

    switch (eventName) {
      case "order_created":
        // Do stuff here if you are using orders
        break;
      case "order_refunded":
        // Do stuff here if you are using orders
        break;
      case "subscription_created":
      case "subscription_cancelled":
      case "subscription_resumed":
      case "subscription_expired":
      case "subscription_paused":
      case "subscription_unpaused":
      case "subscription_payment_failed":
      case "subscription_payment_success":
      case "subscription_payment_recovered":
      case "subscription_updated":
        // Do something with the subscription here, like syncing to your database

        const { error } = await supabase()
          .from("subscriptions")
          .upsert({
            ends_at: subscription.attributes.ends_at as unknown as string,
            json_data: JSON.stringify(subscription, null, 5),
            lemon_squeezy_id: subscription.id,
            renews_at: subscription.attributes.renews_at as unknown as string,
            status: subscription.attributes.status,
            update_payment_url:
              subscription.attributes.urls.update_payment_method,

            profile_id: custom_data.userId,
          });

        if (error) console.error(JSON.stringify(error));

        console.log(payload);
        break;
      default:
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        throw new Error(`🤷‍♀️ Unhandled event: ${eventName ?? ""}`);
    }
  } catch (error: unknown) {
    console.error(JSON.stringify(error));
    if (isError(error)) {
      return new Response(`Webhook error: ${error.message}`, {
        status: 400,
      });
    }

    return new Response("Webhook error", {
      status: 400,
    });
  }

  return new Response(null, {
    status: 200,
  });
};
