import Header from "@/_components/Header";
import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";
import "@/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

console.log(josefin);

export const metadata = {
  // title: " The wild Oasis",
  title: {
    template: "%s | The Wild Oasis",
    default: "Welcome | The Wild Oasis",
  },
  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surounded by beatiful montains and dark forests",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${josefin.className} bg-primary-950 text-primary-200 min-h-screen`}
      >
        <Header />
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
