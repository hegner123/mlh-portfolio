import "../style/globals.scss";
import { Open_Sans } from "next/font/google";
import Navigation from "mlh/components/nav";
import Footer from "mlh/components/footer";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Hegner",
  description: "Full stack developer.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} grid grid-cols-12 min-h-[100vh] auto-rows-max`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
