import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import "./globals.css";
import Navbar from "@/components/navBar/NavBar";
import Footer from "@/components/footer/Footer";
import { poppins } from "@/fonts/Fonts";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="min-h-screen bg-slate-50 font-poppins">
        <Navbar />
        <div className="mt-[80px]">{children}</div>
        <Footer />
      </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}
