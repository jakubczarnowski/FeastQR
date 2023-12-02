import { PrefetchTRPCQuery } from "~/components/PrefetchTRPCQuery/PrefetchTRPCQuery";
import { PrivateRoute } from "~/components/PrivateRoute/PrivateRoute";

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <PrivateRoute>
      <PrefetchTRPCQuery queryName="auth.getProfile">
        {children}
      </PrefetchTRPCQuery>
    </PrivateRoute>
  );
}

export default RootLayout;
