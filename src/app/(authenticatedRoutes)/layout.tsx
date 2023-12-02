import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { LayoutView } from "./_components/LayoutView";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrefetchTRPCQuery queryName="auth.getProfile">
      <LayoutView>{children}</LayoutView>
    </PrefetchTRPCQuery>
  );
}

export default RootLayout;
