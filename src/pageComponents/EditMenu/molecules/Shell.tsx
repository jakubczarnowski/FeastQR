import * as React from "react";
import { cn } from "~/utils/cn";

type DashboardShellProps = React.HTMLAttributes<HTMLDivElement>;

export function DashboardShell({
  children,
  className,
  ...props
}: DashboardShellProps) {
  return (
    <div
      className={cn("flex w-full max-w-3xl flex-col gap-8 p-2", className)}
      {...props}
    >
      {children}
    </div>
  );
}
