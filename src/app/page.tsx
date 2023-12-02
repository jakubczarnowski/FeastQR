import Link from "next/link";
import { Button } from "~/components/ui/button";

const Homepage = () => {
  return (
    <section className="flex h-full w-full grow flex-col items-center justify-center gap-4 px-6 py-10 md:py-20">
      <div className="bg-150rem bg-hero-pattern dark:bg-hero-pattern-dark absolute inset-0 bottom-10 -z-10 border-b border-border bg-slate-50 bg-bottom bg-no-repeat object-fill opacity-50 dark:bg-[#0B1120]" />
      <h1 className="max-w-5xl text-center text-6xl font-bold tracking-tight text-primary">
        T3 Stack Starter
      </h1>
      <div className="mt-5 max-w-[720px] text-center text-2xl font-semibold text-secondary-foreground/70">
        <p>- T3 Stack</p>
        <p>- App Directory</p>
        <p className="text-2xl">Full Supabase Configuration</p>
        <div className="rounded-md bg-slate-100 p-2  text-xl font-normal dark:bg-slate-900">
          <p>- Implemented Authorization</p>
          <p>- Migrations</p>
          <p>- Set Up for multiple environments</p>
          <p>- CI/CD migrations</p>
          <p>- Storage</p>
        </div>
        <p>- Internalization</p>
        <p>- Shadcn/ui</p>
        <p>- Running And Ready to go!</p>
      </div>
      <Link href="/login">
        <Button variant="secondary">Login</Button>
      </Link>
    </section>
  );
};

export default Homepage;
