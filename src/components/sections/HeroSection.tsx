"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { GradientText } from "@/components/ui/GradientText";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { FloatingElement } from "@/components/animations/FloatingElement";
import Image from "next/image";
import { Sparkles, Heart, Shield, MapPin } from "lucide-react";

export function HeroSection() {
  const t = useTranslations("hero");

  return (
    <section className="relative min-h-screen overflow-hidden pt-24 pb-16 lg:pt-32 lg:pb-24">
      {/* Background gradient orbs */}
      <div className="gradient-orb absolute -top-40 -right-40 h-[500px] w-[500px] bg-primary-400" />
      <div className="gradient-orb absolute -bottom-40 -left-40 h-[400px] w-[400px] bg-secondary-400" />
      <div className="gradient-orb absolute top-1/2 left-1/2 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 bg-primary-300" />

      <Container className="relative">
        <div className="flex flex-col items-center gap-12 lg:flex-row lg:gap-16">
          {/* Left - Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <FadeInWhenVisible>
              <Badge>
                <Sparkles size={14} />
                {t("badge")}
              </Badge>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.1}>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                {t("title").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
                <GradientText>{t("titleHighlight")}</GradientText>
              </h1>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.2}>
              <p className="mt-6 max-w-lg text-lg text-[var(--muted-foreground)] sm:text-xl lg:mx-0 mx-auto">
                {t("subtitle").split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    <br />
                  </span>
                ))}
              </p>
            </FadeInWhenVisible>

            <FadeInWhenVisible delay={0.3}>
              <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row lg:justify-start justify-center">
                <Button size="lg" href="#download">
                  {t("cta_primary")}
                </Button>
                <Button variant="outline" size="lg" href="#features">
                  {t("cta_secondary")}
                </Button>
              </div>
            </FadeInWhenVisible>
          </div>

          {/* Right - Phone Mockup */}
          <div className="relative flex-1">
            <FadeInWhenVisible direction="right" delay={0.2}>
              <FloatingElement duration={4} distance={12}>
                <div className="relative mx-auto w-[280px] sm:w-[320px]">
                  {/* Phone Frame */}
                  <div className="glass-card overflow-hidden rounded-[2.5rem] p-3 shadow-2xl shadow-primary-500/10">
                    <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-b from-primary-50 to-secondary-50 dark:from-primary-950 dark:to-secondary-950">
                      {/* App UI Preview */}
                      <div className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <Image
                          src="/ic_launcher.png"
                          alt="keenylog"
                          width={64}
                          height={64}
                          className="rounded-2xl shadow-lg"
                        />
                        <h3 className="mt-4 text-xl font-bold">
                          keeny<span className="text-primary-500">log</span>
                        </h3>
                        <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                          AI Pet Health
                        </p>

                        {/* Mini feature cards */}
                        <div className="mt-6 w-full space-y-2">
                          {[
                            { icon: Shield, label: "AI Health Score", value: "9.2/10" },
                            { icon: Heart, label: "Today's Calories", value: "342 kcal" },
                            { icon: MapPin, label: "Walk Distance", value: "2.4 km" },
                          ].map((item, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 rounded-xl bg-[var(--background)]/60 px-3 py-2.5 text-left backdrop-blur"
                            >
                              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-500/10">
                                <item.icon size={14} className="text-primary-500" />
                              </div>
                              <div className="flex-1">
                                <p className="text-[10px] text-[var(--muted-foreground)]">
                                  {item.label}
                                </p>
                                <p className="text-xs font-semibold">{item.value}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </FloatingElement>
            </FadeInWhenVisible>

            {/* Floating decorative elements */}
            <FloatingElement duration={5} distance={8} className="absolute -top-4 -right-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary-400/20 backdrop-blur-sm">
                <Heart size={20} className="text-secondary-400" />
              </div>
            </FloatingElement>
            <FloatingElement duration={6} distance={6} className="absolute -bottom-4 -left-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary-500/20 backdrop-blur-sm">
                <Sparkles size={16} className="text-primary-500" />
              </div>
            </FloatingElement>
          </div>
        </div>
      </Container>
    </section>
  );
}
