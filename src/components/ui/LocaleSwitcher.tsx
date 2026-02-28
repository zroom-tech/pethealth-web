"use client";

import { useLocale } from "next-intl";
import { usePathname } from "@/i18n/navigation";
import { Link } from "@/i18n/navigation";
import { Globe } from "lucide-react";

export function LocaleSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const nextLocale = locale === "ko" ? "en" : "ko";

  return (
    <Link
      href={pathname}
      locale={nextLocale}
      className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
    >
      <Globe size={16} />
      {locale === "ko" ? "EN" : "KO"}
    </Link>
  );
}
