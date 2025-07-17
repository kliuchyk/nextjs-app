"use client";

import "./globals.css";
import { Inter } from "next/font/google";

import NavBar from "./NavBar";
import AuthProvider from "./auth/Provider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="winter">
      <body className={inter.className}>
        <AuthProvider>
          <NavBar />
          <main className="p-5">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
