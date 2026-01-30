"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function Home() {
  const pathname = usePathname();

  return (
    <main>
      Home
      <Button
        className={cn(
          "bg-blue-600",
          pathname === "/" ? "text-white" : "text-gray-400"
        )}
      >
        Click Me
      </Button>
    </main>
  );
}
