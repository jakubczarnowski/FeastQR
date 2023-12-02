"use client";

import Link from "next/link";
import { type PropsWithChildren } from "react";
import { useTranslation } from "react-i18next";
import { Icons } from "~/components/Icons";
import { Navbar } from "~/components/Navbar/Navbar";
import { Button } from "~/components/ui/button";
import { withPublicRoute } from "~/providers/AuthProvider/withPublicRoute";
import { supabase } from "~/server/supabase/supabaseClient";

const testAccounts = [
  { email: "random@gmail.com", password: "testPassword" },
  { email: "random2@gmail.com", password: "testPassword2" },
];

const Layout = ({ children }: PropsWithChildren) => {
  const { t } = useTranslation();

  return (
    <>
      <Navbar />
      <div className="container relative flex h-full w-full grow flex-col items-center justify-center">
        <Link href="/">
          <Button
            variant="ghost"
            className="absolute left-4 top-4 md:left-8 md:top-8"
          >
            <>
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              {t("common.backButton")}
            </>
          </Button>
        </Link>
        {children}
        {process.env.NEXT_PUBLIC_VERCEL_ENV !== "production" && (
          <div className="flex flex-col gap-2">
            {testAccounts.map((account, index) => (
              <div key={index} className="flex flex-col items-start ">
                <button
                  onClick={() => {
                    void supabase().auth.signInWithPassword(account);
                  }}
                >
                  Login {account.email}
                </button>
                <button
                  onClick={() => {
                    void supabase().auth.signUp(account);
                  }}
                >
                  Register {account.email}
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default withPublicRoute(Layout);
