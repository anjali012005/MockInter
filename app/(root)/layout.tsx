import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { getCurrentUser, isAuthenticated } from "@/lib/actions/auth.action";
import { Toaster } from "sonner";

const RootLayout = async ({ children }: { children: ReactNode }) => {

  const isUserAuthenticated  = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");
  return (
    <div className="root-layout">
      <nav>
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.svg" alt="MockMate Logo" width={38} height={32} />
          <h2 className="text-primary-100">MockInter</h2>
        </Link>
      </nav>

      {children}
      <Toaster/>
    </div>
  );
};

export default RootLayout;