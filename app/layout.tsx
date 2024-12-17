import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";

const poppinsSans = Poppins({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-poppins"
});

export const metadata: Metadata = {
  title: "Nimbus",
  description: "Nimbus - Cloud storage made simple.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppinsSans.variable} font-poppins antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
