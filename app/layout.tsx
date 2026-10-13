import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Golden Oaks Apartments | South Pasadena, CA",
    template: "%s - Golden Oaks Apartments",
  },
  description:
    "Golden Oaks Apartments is perfectly situated in downtown South Pasadena. The Los Angeles night life is just a short train ride away, yet South Pasadena boasts a charming small-town feel and a top rated school district. Dining, popular shops, a famed library, and a bustling farmer’s market are mere steps from the community, along with the Metro Gold Line, which can take you far and wide.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
