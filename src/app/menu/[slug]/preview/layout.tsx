"use client";

import { withPrivateRoute } from "~/providers/AuthProvider/withPrivateRoute";

function RootLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const Layout = withPrivateRoute(RootLayout);

export default Layout;
