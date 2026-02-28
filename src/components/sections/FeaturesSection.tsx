"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import {
  Camera,
  Stethoscope,
  MapPin,
  Scale,
  Scissors,
  Trophy,
} from "lucide-react";

const features = [
  {
    key: "food_analysis",
    icon: Camera,
    color: "from-primary-500 to-primary-400",
    iconBg: "bg-primary-500/10",
    iconColor: "text-primary-500",
  },
  {
    key: "stool_check",
    icon: Stethoscope,
    color: "from-secondary-400 to-secondary-300",
    iconBg: "bg-secondary-400/10",
    iconColor: "text-secondary-400",
  },
  {
    key: "walk_tracking",
    icon: MapPin,
    color: "from-blue-500 to-blue-400",
    iconBg: "bg-blue-500/10",
    iconColor: "text-blue-500",
  },
  {
    key: "weight_management",
    icon: Scale,
    color: "from-emerald-500 to-emerald-400",
    iconBg: "bg-emerald-500/10",
    iconColor: "text-emerald-500",
  },
  {
    key: "grooming_vet",
    icon: Scissors,
    color: "from-purple-500 to-purple-400",
    iconBg: "bg-purple-500/10",
    iconColor: "text-purple-500",
  },
  {
    key: "gamification",
    icon: Trophy,
    color: "from-amber-500 to-amber-400",
    iconBg: "bg-amber-500/10",
    iconColor: "text-amber-500",
  },
];

export function FeaturesSection() {
  const t = useTranslations("features");

  return (
    <section id="features" className="relative py-20 lg:py-28">
      <Container>
        <FadeInWhenVisible className="text-center">
          <Badge>{t("sectionBadge")}</Badge>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
            {t("sectionTitle").split("\n").map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-[var(--muted-foreground)]">
            {t("sectionSubtitle")}
          </p>
        </FadeInWhenVisible>

        <StaggerChildren className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <StaggerItem key={feature.key}>
                <Card className="group h-full cursor-default hover:scale-[1.02]">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.iconBg}`}
                  >
                    <Icon size={24} className={feature.iconColor} />
                  </div>
                  <h3 className="mt-4 text-lg font-bold">
                    {t(`${feature.key}.title`)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--muted-foreground)]">
                    {t(`${feature.key}.description`)}
                  </p>
                </Card>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </Container>
    </section>
  );
}
