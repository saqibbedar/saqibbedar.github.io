import "./index.css";
import FrontendRoutes from "./routes/FrontendRoutes.jsx";
import { BackToTop } from "@/components/reusable/reusable";
import { Navbar, Footer } from '@/components/normal/components.js';

function App() {
  return (
    <>
      <Navbar />
      <BackToTop/>
      <div className="2xl:max-w-[100rem] 2xl:m-auto px-[26px] media1:px-[80px] mediaXl:px-0 main">
          <FrontendRoutes />
      </div>
      <Footer />
    </>
  );
}

export default App;
