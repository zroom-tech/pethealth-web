import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "키니로그 | keenylog",
  description: "AI 기반 반려동물 건강 관리 앱",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
