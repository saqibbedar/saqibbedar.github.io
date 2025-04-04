// import DarkModeDetection from './components/DarkModeDetection/DarkModeDetection'
import "./index.css";
import {Navbar, Footer} from './components/components.js'
import BackToTop from "./components/Reusable Components/BackToTop/BackToTop";
import FrontendRoutes from "./routes/FrontendRoutes.jsx";

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
