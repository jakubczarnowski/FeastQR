import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { LayoutView } from "./_components/LayoutView";

function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <PrefetchTRPCQuery queryName="menus.getMenuBySlug" params={params}>
      <LayoutView>{children}</LayoutView>
    </PrefetchTRPCQuery>
  );
}

export default RootLayout;
