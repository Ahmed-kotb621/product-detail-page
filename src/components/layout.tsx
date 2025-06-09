import CartDrawer from "./CartDrawer";
import Footer from "./Footer";
import Navbar from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="flex flex-col min-h-screen font-clash">
      <Navbar />
      <CartDrawer />
      <main className="flex-grow mt-28">{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
