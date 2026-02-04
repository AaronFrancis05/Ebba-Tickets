import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Ebba Tickets",
  description: "Modern Ticketing Platform for Events and Support",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      className={`${geistSans.variable} ${geistMono.variable} antialiased bg-purple-300`}
      >
        <ClerkProvider>
          
          {children}
          </ClerkProvider>            
        
      </body>
    </html>
  );
}
