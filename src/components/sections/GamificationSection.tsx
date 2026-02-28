"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import { motion, useReducedMotion } from "motion/react";
import {
  Flame,
  CheckCircle2,
  Circle,
  Star,
  Gem,
  Coins,
  Trophy,
} from "lucide-react";

function AnimatedBar({
  width,
  color,
  delay,
}: {
  width: string;
  color: string;
  delay: number;
}) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={`h-full rounded-full ${color}`}
      initial={{ width: "0%" }}
      whileInView={{ width }}
      viewport={{ once: true }}
      transition={{
        duration: reduced ? 0.5 : 1,
        delay: reduced ? delay * 0.3 : delay,
        ease: "easeOut",
      }}
    />
  );
}

export function GamificationSection() {
  const t = useTranslations("gamification");

  const dailyMissions = [
    { key: "mission_attendance", completed: true },
    { key: "mission_food", completed: true },
    { key: "mission_walk", completed: false },
  ];

  const weeklyMissions = [
    { key: "mission_stool", completed: true },
    { key: "mission_weight", completed: false },
  ];

  return (
    <section className="relative py-20 lg:py-28">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {/* Left - Missions */}
          <FadeInWhenVisible direction="left" delay={0.1}>
            <div className="glass-card space-y-6 rounded-2xl p-6">
              {/* Daily Missions */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-primary-500">
                  <Trophy size={16} />
                  {t("daily_missions")}
                </h3>
                <div className="mt-3 space-y-2">
                  {dailyMissions.map((m) => (
                    <div
                      key={m.key}
                      className="flex items-center gap-3 rounded-xl bg-[var(--muted)]/60 px-4 py-3"
                    >
                      {m.completed ? (
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500"
                        />
                      ) : (
                        <Circle
                          size={18}
                          className="text-[var(--muted-foreground)]"
                        />
                      )}
                      <span
                        className={`flex-1 text-sm ${m.completed ? "line-through text-[var(--muted-foreground)]" : "font-medium"}`}
                      >
                        {t(m.key)}
                      </span>
                      <span className="text-xs text-primary-500 font-semibold">
                        +50P
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Weekly Missions */}
              <div>
                <h3 className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-secondary-400">
                  <Star size={16} />
                  {t("weekly_missions")}
                </h3>
                <div className="mt-3 space-y-2">
                  {weeklyMissions.map((m) => (
                    <div
                      key={m.key}
                      className="flex items-center gap-3 rounded-xl bg-[var(--muted)]/60 px-4 py-3"
                    >
                      {m.completed ? (
                        <CheckCircle2
                          size={18}
                          className="text-emerald-500"
                        />
                      ) : (
                        <Circle
                          size={18}
                          className="text-[var(--muted-foreground)]"
                        />
                      )}
                      <span
                        className={`flex-1 text-sm ${m.completed ? "line-through text-[var(--muted-foreground)]" : "font-medium"}`}
                      >
                        {t(m.key)}
                      </span>
                      <span className="text-xs text-secondary-500 font-semibold">
                        +100P
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeInWhenVisible>

          {/* Right - Stats & Progress */}
          <FadeInWhenVisible direction="right" delay={0.2}>
            <div className="space-y-5">
              {/* Streak */}
              <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-400 to-orange-500 shadow-lg shadow-amber-500/20">
                  <Flame size={28} className="text-white" />
                </div>
                <div>
                  <p className="text-sm text-[var(--muted-foreground)]">
                    {t("streak")}
                  </p>
                  <p className="text-2xl font-extrabold">
                    {t("streak_days", { count: 7 })}
                  </p>
                </div>
              </div>

              {/* Level & EXP */}
              <div className="glass-card rounded-2xl p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {t("level")}
                    </p>
                    <p className="text-3xl font-extrabold">12</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm text-[var(--muted-foreground)]">
                      {t("exp")}
                    </p>
                    <p className="text-sm font-bold">750 / 1,200</p>
                  </div>
                </div>
                <div className="mt-3 h-3 overflow-hidden rounded-full bg-[var(--muted)]">
                  <AnimatedBar
                    width="62%"
                    color="bg-gradient-to-r from-primary-500 to-secondary-400"
                    delay={0.5}
                  />
                </div>
              </div>

              {/* Currency */}
              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-2xl p-4 text-center">
                  <Coins
                    size={24}
                    className="mx-auto text-amber-500"
                  />
                  <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                    {t("points")}
                  </p>
                  <p className="text-xl font-extrabold">3,250</p>
                </div>
                <div className="glass-card rounded-2xl p-4 text-center">
                  <Gem size={24} className="mx-auto text-purple-500" />
                  <p className="mt-2 text-xs text-[var(--muted-foreground)]">
                    {t("gems")}
                  </p>
                  <p className="text-xl font-extrabold">120</p>
                </div>
              </div>

              {/* Membership bonus */}
              <div className="rounded-xl bg-gradient-to-r from-primary-500/10 to-secondary-400/10 p-4 text-center">
                <p className="text-sm font-semibold text-primary-600 dark:text-primary-400">
                  {t("membership_bonus")}
                </p>
              </div>
            </div>
          </FadeInWhenVisible>
        </div>
      </Container>
    </section>
  );
}
