import { useTranslations } from "next-intl";
import Image from "next/image";
import { Container } from "@/components/ui/Container";

export function Footer() {
  const t = useTranslations("footer");
  const year = new Date().getFullYear();

  const columns = [
    {
      title: t("product"),
      links: [
        { label: t("features"), href: "#features" },
        { label: t("ai_analysis"), href: "#ai-showcase" },
        { label: t("pricing"), href: "#" },
      ],
    },
    {
      title: t("support"),
      links: [
        { label: t("faq"), href: "#" },
        { label: t("contact"), href: "#" },
      ],
    },
    {
      title: t("legal"),
      links: [
        { label: t("privacy"), href: "#" },
        { label: t("terms"), href: "#" },
      ],
    },
  ];

  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--muted)]/50">
      <Container className="py-12 lg:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#" className="flex items-center gap-2">
              <Image
                src="/ic_launcher.png"
                alt="keenylog"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <span className="text-lg font-bold">
                keeny<span className="text-primary-500">log</span>
              </span>
            </a>
            <p className="mt-3 text-sm text-[var(--muted-foreground)]">
              {t("brand_description")}
            </p>
          </div>

          {/* Link Columns */}
          {columns.map((col) => (
            <div key={col.title}>
              <h3 className="mb-3 text-sm font-semibold">{col.title}</h3>
              <ul className="space-y-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[var(--muted-foreground)] transition-colors hover:text-[var(--foreground)]"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="section-divider mt-8" />
        <p className="mt-6 text-center text-xs text-[var(--muted-foreground)]">
          {t("copyright", { year })}
        </p>
      </Container>
    </footer>
  );
}
