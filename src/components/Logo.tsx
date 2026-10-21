import Image from "next/image";
import Link from "next/link";
import { site } from "@/content/site";

export function Logo({ variant = "dark", className = "h-11 w-auto" }: { variant?: "dark" | "light"; className?: string }) {
  return (
    <Link href="/" aria-label={`${site.name} home`} className="inline-flex shrink-0">
      <Image
        src={variant === "light" ? "/brand/reddington-logo-light.png" : "/brand/reddington-logo.png"}
        alt={site.name}
        width={800}
        height={274}
        priority
        className={className}
      />
    </Link>
  );
}
