import Footer from "@/common/components/Navigation/Footer";
import Navbar from "@/common/components/Navigation/Navbar";

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
