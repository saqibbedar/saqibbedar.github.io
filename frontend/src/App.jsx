import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BackToTop } from "@/components/ui";
import { Navbar, Footer } from "@/components/common";
import { useSmoothScroll, useScrollToTop } from "@/hooks";

function App() {
  useSmoothScroll();
  useScrollToTop();
  return (
    <div className="selection:text-black selection:bg-white w-full min-h-screen">
      <Navbar />
      <BackToTop />
      <main className="w-full">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;
