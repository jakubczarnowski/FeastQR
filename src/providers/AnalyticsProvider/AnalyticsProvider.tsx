"use client";

import { Analytics } from "@vercel/analytics/react";

import Script from "next/script";
import { env } from "~/env.mjs";

export const AnalyticsProvider = () => <Analytics />;

export const UmamiAnalyticsProvider = () => {
  return env.NEXT_PUBLIC_UMAMI_WEBSITE_ID ? (
    <Script
    src={env.NEXT_PUBLIC_UMAMI_URL}
      data-website-id={env.NEXT_PUBLIC_UMAMI_WEBSITE_ID}
      strategy="lazyOnload"
    />
  ) : null;
};
