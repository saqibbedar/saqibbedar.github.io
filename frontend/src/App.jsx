import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BackToTop, QuickSearch } from "@/components/ui";
import { Navbar, Footer } from '@/components/common';
import { useSmoothScroll, useScrollToTop } from "./hooks";

function App() {
  useSmoothScroll();
  useScrollToTop();
  return ( 
    <div className="selection:text-black selection:bg-white maximumWidth">
      <Navbar />
      <BackToTop/>
      <AppRoutes />
      <QuickSearch/>
      <Footer />
    </div>
  );
}

export default App;
