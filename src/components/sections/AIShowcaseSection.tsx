"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { cn } from "@/lib/utils";
import {
  Camera,
  Stethoscope,
  Zap,
  BarChart3,
  Star,
  CheckCircle2,
  AlertTriangle,
  Heart,
  Utensils,
} from "lucide-react";

const tabs = [
  { key: "food", icon: Camera },
  { key: "stool", icon: Stethoscope },
] as const;

export function AIShowcaseSection() {
  const t = useTranslations("aiShowcase");
  const [activeTab, setActiveTab] = useState<"food" | "stool">("food");

  return (
    <section
      id="ai-showcase"
      className="relative overflow-hidden py-20 lg:py-28"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-50/30 to-transparent dark:via-primary-950/20" />

      <Container className="relative">
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

        {/* Tabs */}
        <FadeInWhenVisible delay={0.1} className="mt-10 flex justify-center">
          <div className="inline-flex rounded-xl bg-[var(--muted)] p-1">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={cn(
                    "flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium transition-all",
                    activeTab === tab.key
                      ? "bg-[var(--background)] text-[var(--foreground)] shadow-sm"
                      : "text-[var(--muted-foreground)] hover:text-[var(--foreground)]"
                  )}
                >
                  <Icon size={16} />
                  {t(`${tab.key}.title`)}
                </button>
              );
            })}
          </div>
        </FadeInWhenVisible>

        {/* Content */}
        <div className="mt-12 grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Visual */}
          <FadeInWhenVisible direction="left" delay={0.2}>
            <div className="glass-card mx-auto max-w-sm overflow-hidden rounded-3xl p-4 shadow-xl lg:mx-0">
              {activeTab === "food" ? (
                <FoodAnalysisDemo />
              ) : (
                <StoolAnalysisDemo />
              )}
            </div>
          </FadeInWhenVisible>

          {/* Right - Text */}
          <FadeInWhenVisible direction="right" delay={0.3}>
            <div>
              <h3 className="text-2xl font-bold sm:text-3xl">
                {t(`${activeTab}.title`)}
              </h3>
              <p className="mt-4 text-[var(--muted-foreground)] leading-relaxed">
                {t(`${activeTab}.description`)}
              </p>
              <ul className="mt-6 space-y-3">
                {[1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary-500/10">
                      <CheckCircle2
                        size={14}
                        className="text-primary-500"
                      />
                    </div>
                    <span className="text-sm font-medium">
                      {t(`${activeTab}.feature${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  );
}

function FoodAnalysisDemo() {
  return (
    <div className="space-y-3">
      {/* Photo placeholder */}
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 to-orange-100 dark:from-amber-900/30 dark:to-orange-900/30">
        <div className="text-center">
          <Utensils size={48} className="mx-auto text-primary-400" />
          <p className="mt-2 text-xs text-[var(--muted-foreground)]">
            Pet Food Photo
          </p>
        </div>
      </div>
      {/* Analysis results */}
      <div className="space-y-2 rounded-xl bg-[var(--background)]/60 p-3">
        <div className="flex items-center gap-2">
          <Star size={14} className="text-amber-500" />
          <span className="text-xs font-semibold">Premium Dry Kibble</span>
          <span className="ml-auto rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-600 dark:text-emerald-400">
            Good
          </span>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: "Calories", value: "342 kcal" },
            { label: "Protein", value: "28.5%" },
            { label: "Fat", value: "15.2%" },
            { label: "Fiber", value: "4.1%" },
          ].map((item) => (
            <div key={item.label} className="rounded-lg bg-[var(--muted)] px-2.5 py-1.5">
              <p className="text-[9px] text-[var(--muted-foreground)]">
                {item.label}
              </p>
              <p className="text-xs font-bold">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StoolAnalysisDemo() {
  return (
    <div className="space-y-3">
      {/* Score display */}
      <div className="flex aspect-square items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-100 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30">
        <div className="text-center">
          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-4 border-emerald-400 bg-emerald-50 dark:bg-emerald-900/50">
            <div>
              <p className="text-3xl font-extrabold text-emerald-600 dark:text-emerald-400">
                8.5
              </p>
              <p className="text-[10px] font-medium text-emerald-600/70 dark:text-emerald-400/70">
                /10
              </p>
            </div>
          </div>
          <p className="mt-3 text-sm font-semibold text-emerald-600 dark:text-emerald-400">
            Healthy
          </p>
        </div>
      </div>
      {/* Details */}
      <div className="space-y-2 rounded-xl bg-[var(--background)]/60 p-3">
        {[
          { label: "Color", value: "Brown", icon: BarChart3, status: "normal" },
          { label: "Consistency", value: "Normal", icon: Zap, status: "normal" },
          { label: "Urgency", value: "Normal", icon: AlertTriangle, status: "normal" },
          { label: "Overall", value: "Healthy", icon: Heart, status: "good" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 rounded-lg bg-[var(--muted)] px-2.5 py-2"
          >
            <item.icon size={12} className="text-[var(--muted-foreground)]" />
            <span className="flex-1 text-[10px] text-[var(--muted-foreground)]">
              {item.label}
            </span>
            <span
              className={cn(
                "text-xs font-semibold",
                item.status === "good"
                  ? "text-emerald-600 dark:text-emerald-400"
                  : ""
              )}
            >
              {item.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
