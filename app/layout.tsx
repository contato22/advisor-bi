import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Advisor BI",
    description: "Dashboard Advisor BI",
    };

    export default function RootLayout({
      children,
      }: {
        children: React.ReactNode;
        }) {
          return (
              <html lang="pt-BR">
                    <body>{children}</body>
                        </html>
                          );
                          }