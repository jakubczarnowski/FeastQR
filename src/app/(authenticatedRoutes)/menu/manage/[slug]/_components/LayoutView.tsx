"use client";

import { Sidebar } from "~/pageComponents/RestaurantDashboard/molecules/Sidebar";

export const LayoutView = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full min-h-full flex-1 grow flex-col gap-6 md:flex-row">
      <Sidebar />
      <div className="flex w-full  grow items-center justify-center border-l-2 border-secondary px-4">
        {children}
      </div>
    </div>
  );
};
