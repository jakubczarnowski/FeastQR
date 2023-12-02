"use client";

import Script from "next/script";
import { Navbar } from "~/components/Navbar/Navbar";
import { withPrivateRoute } from "~/providers/AuthProvider/withPrivateRoute";

const LayoutViewComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="flex h-full w-full grow flex-col justify-center px-2 md:items-center md:px-0">
        <Script src="https://app.lemonsqueezy.com/js/lemon.js"></Script>
        <div className="flex-1 md:container">{children}</div>
      </div>
    </>
  );
};

export const LayoutView = withPrivateRoute(LayoutViewComponent);
