import type { Metadata } from "next";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import "./globals.css";
import { DM_Sans } from "next/font/google"
import {Toaster} from "@/components/ui/sonner"
import { ThemeProvider } from "@/provider/theme-provider";
import ModalProvider from "@/provider/modal-provider";


const font = DM_Sans({

  subsets: ["latin"],
});



export const metadata: Metadata = {
  title: "Fuzzie",
  description: "Automate your work with Fuzzy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className}  antialiased`}
      >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
        <ModalProvider>
          {children}
          <Toaster />
        </ModalProvider>
        </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}
