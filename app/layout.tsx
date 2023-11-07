import "../style/globals.scss";
import { Open_Sans } from "next/font/google";
import Navigation from "mlh/components/nav";
import Footer from "mlh/components/footer";
const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Michael Hegner",
  description: "Full stack developer.",
  favicon: "/favicon.ico",
  siteManifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className} grid content-layout min-h-[100vh] `}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
