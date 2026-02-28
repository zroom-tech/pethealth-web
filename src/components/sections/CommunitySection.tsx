"use client";

import { useTranslations } from "next-intl";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { FadeInWhenVisible } from "@/components/animations/FadeInWhenVisible";
import {
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/StaggerChildren";
import Image from "next/image";
import { Heart, MessageCircle } from "lucide-react";

const petNames = [
  { name: "Coco", avatar: "🐕" },
  { name: "Momo", avatar: "🐈" },
  { name: "Lucky", avatar: "🐶" },
];

export function CommunitySection() {
  const t = useTranslations("community");

  const diaries = [
    {
      pet: petNames[0],
      content: t("sample_diary1"),
      likes: 24,
      comments: 8,
      time: "2h",
    },
    {
      pet: petNames[1],
      content: t("sample_diary2"),
      likes: 31,
      comments: 12,
      time: "4h",
    },
    {
      pet: petNames[2],
      content: t("sample_diary3"),
      likes: 18,
      comments: 5,
      time: "6h",
    },
  ];

  return (
    <section id="community" className="relative py-20 lg:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-secondary-50/30 to-transparent dark:via-secondary-950/20" />

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

        {/* AI Pet Diary badge */}
        <FadeInWhenVisible delay={0.1} className="mt-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-secondary-400/10 px-4 py-2 text-sm font-medium text-secondary-600 dark:text-secondary-400">
            <Image src="/ic_launcher.png" alt="" width={14} height={14} className="rounded-sm" />
            {t("diary_title")} — {t("diary_description")}
          </div>
        </FadeInWhenVisible>

        {/* Diary Cards */}
        <StaggerChildren className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {diaries.map((diary, i) => (
            <StaggerItem key={i}>
              <div className="glass-card rounded-2xl p-5 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg">
                {/* Header */}
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--muted)] text-xl">
                    {diary.pet.avatar}
                  </span>
                  <div>
                    <p className="text-sm font-bold">{diary.pet.name}</p>
                    <p className="text-xs text-[var(--muted-foreground)]">
                      {diary.time} ago
                    </p>
                  </div>
                </div>

                {/* Content */}
                <p className="mt-3 text-sm leading-relaxed text-[var(--muted-foreground)]">
                  {diary.content}
                </p>

                {/* Actions */}
                <div className="mt-4 flex items-center gap-4 border-t border-[var(--card-border)] pt-3">
                  <button className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] transition-colors hover:text-red-500">
                    <Heart size={14} />
                    {diary.likes}
                  </button>
                  <button className="flex items-center gap-1.5 text-xs text-[var(--muted-foreground)] transition-colors hover:text-primary-500">
                    <MessageCircle size={14} />
                    {diary.comments}
                  </button>
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </Container>
    </section>
  );
}
