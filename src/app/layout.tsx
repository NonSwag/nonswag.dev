import type {Metadata} from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import Script from "next/script";

const geistSans = localFont({
    src: "./fonts/GeistVF.woff",
    variable: "--font-geist-sans",
    weight: "100 900",
});
const geistMono = localFont({
    src: "./fonts/GeistMonoVF.woff",
    variable: "--font-geist-mono",
    weight: "100 900",
});

export const metadata: Metadata = {
    title: "NonSwag | Portfolio",
    description: "NonSwag's Portfolio showcasing development projects and skills",
    keywords: ["minecraft plugins", "portfolio", "nonswag", "java", "paper plugin", "minecraft", "programming"],
    authors: [{name: "NonSwag"}],
    openGraph: {
        type: "website",
        locale: "en_US",
        url: "https://nonswag.dev",
        siteName: "NonSwag Portfolio",
        title: "NonSwag | Developer Portfolio",
        description: "Explore NonSwag's development projects and skills",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        <header>
            <Script defer src="https://analytics.thenextlvl.net/script.js"
                    data-website-id="b29f8472-a35d-4743-aa19-85d7f130e315"></Script>
        </header>
        <main>{children}</main>
        </body>
        </html>
    );
}