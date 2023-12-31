import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/app/NavBar";
import { AuthProvider } from "@/app/auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AuthProvider>
      <html lang="en" data-theme="winter">
        <body className={inter.className}>
          <NavBar />
          <main className="p-5">{children}</main>
        </body>
      </html>
    </AuthProvider>
  );
}
