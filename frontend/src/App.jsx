import "./index.css";
import AppRoutes from "./routes/AppRoutes.jsx";
import { BackToTop } from "@/components/ui";
import { Navbar, Footer } from '@/components/common';

function App() {
  return (
    <div>
      <Navbar />
      <BackToTop/>
      <div className="2xl:max-w-[100rem] 2xl:m-auto px-[26px] media1:px-[80px] mediaXl:px-0 main">
          <AppRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
