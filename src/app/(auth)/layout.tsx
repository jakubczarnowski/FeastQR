import { type PropsWithChildren } from "react";
import { Icons } from "~/components/Icons";
import { Button } from "~/components/ui/button";
import { DevLoginButtons } from "./_components/DevLoginButtons";
import { useServerTranslation } from "~/i18n";
import { PublicRoute } from "~/components/PublicRoute/PublicRoute";
import Link from "next/link";

const Layout = async ({ children }: PropsWithChildren) => {
  const { t } = await useServerTranslation();

  return (
    <PublicRoute>
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
          <DevLoginButtons />
        )}
      </div>
    </PublicRoute>
  );
};

export default Layout;
