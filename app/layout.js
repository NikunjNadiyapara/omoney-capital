import { Nunito } from "next/font/google";
import "./globals.css";

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Omoney Capital",
  description: "Your Trusted Partner in Financial Growth",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`min-h-screen bg-white text-gray-900 ${nunito.className}`}
      >
        {children}
      </body>
    </html>
  );
}
