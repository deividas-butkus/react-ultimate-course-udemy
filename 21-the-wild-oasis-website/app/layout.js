import Logo from "@/_components/Logo";
import Navigation from "@/_components/Navigation";
import "@/_styles/globals.css";

export const metadata = {
  title: " The wild Oasis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-primary-950 text-primary-200 min-h-screen">
        <header>
          <Logo />
          <Navigation />
        </header>
        <main>{children}</main>
        <footer>Copyright by The Wild Oasis</footer>
      </body>
    </html>
  );
}
