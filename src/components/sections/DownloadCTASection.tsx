"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { FloatingElement } from "@/components/animations/FloatingElement";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import { Apple, Play, Sparkles } from "lucide-react";

export function DownloadCTASection() {
  const t = useTranslations("download");

  return (
    <section id="download" className="relative overflow-hidden py-20 lg:py-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500 via-primary-600 to-secondary-500" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20viewBox%3D%220%200%2040%2040%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%2040L40%200H20L0%2020M40%2040V20L20%2040%22%20fill%3D%22rgba(255%2C255%2C255%2C0.03)%22%2F%3E%3C%2Fsvg%3E')]" />

      {/* Floating decorative elements */}
      <FloatingElement duration={5} distance={8} className="absolute top-10 left-10 opacity-20">
        <Image src="/ic_launcher.png" alt="" width={40} height={40} className="rounded-lg" />
      </FloatingElement>
      <FloatingElement duration={7} distance={6} className="absolute bottom-10 right-10 opacity-20">
        <Sparkles size={32} className="text-white" />
      </FloatingElement>

      <Container className="relative text-center text-white">
        <FadeInWhenVisible>
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t("sectionTitle").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
            {t("sectionSubtitle").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </p>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href={siteConfig.appStore}
              className="inline-flex items-center gap-3 rounded-xl bg-black/30 px-6 py-3.5 backdrop-blur transition-all hover:bg-black/50"
            >
              <Apple size={24} />
              <div className="text-left">
                <p className="text-[10px] font-medium text-white/70">
                  Download on the
                </p>
                <p className="text-base font-bold">{t("appStore")}</p>
              </div>
            </a>
            <a
              href={siteConfig.playStore}
              className="inline-flex items-center gap-3 rounded-xl bg-black/30 px-6 py-3.5 backdrop-blur transition-all hover:bg-black/50"
            >
              <Play size={24} />
              <div className="text-left">
                <p className="text-[10px] font-medium text-white/70">
                  Get it on
                </p>
                <p className="text-base font-bold">{t("playStore")}</p>
              </div>
            </a>
          </div>
        </FadeInWhenVisible>

        <FadeInWhenVisible delay={0.3}>
          <p className="mt-6 text-sm text-white/60">{t("free")}</p>
        </FadeInWhenVisible>
      </Container>
    </section>
  );
}
