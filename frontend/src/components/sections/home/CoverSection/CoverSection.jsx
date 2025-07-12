import "./CoverSection.css"
import { Link } from "react-router-dom";
// csw: cover section wrapper
const CoverSection = () => {
  return (
    <div className='csw'>
      <button className="available-button">Available</button>
      <div className="tagline">
        <h1>Think Bold.</h1>
        <h1>Build Bedar.</h1>
      </div>
      <div className="video-container">
        <video src="./src/assets/videos/vlogIntro.mp4" autoPlay loop muted></video>
      </div>
      <div className="action-buttons">
        <button>
          <Link to={"/about"}>Sign me a Project</Link>
        </button>
        <button>
          <Link to={"/about"}>View Portfolio</Link>
        </button>
      </div>
    </div>
  )
}

export default CoverSection
