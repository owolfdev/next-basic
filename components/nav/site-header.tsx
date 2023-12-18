import Link from "next/link";

import { ModeToggle } from "@/components/theme-toggle";

function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background">
      <div className="sm:px-12 px-6 flex items-center h-16 space-x-4 sm:justify-between sm:space-x-0">
        <Link href="/">
          <div className="text-4xl font-bold">Next Basic</div>
        </Link>
        <div className="flex items-center justify-end flex-1 space-x-4">
          <div className="flex gap-4 items-center">
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
