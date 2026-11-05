import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MOZ CONNECT | Tudo o que precisas, perto de ti",
  description:
    "Conecta pessoas, ideias, negócios e oportunidades em Moçambique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt">
      <body>{children}</body>
    </html>
  );
}
