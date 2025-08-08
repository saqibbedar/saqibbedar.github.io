import { useEffect, useRef } from "react";
import "./CoverSection.css";
import { Button } from "@/components/ui";

// csw: cover section wrapper
const CoverSection = () => {

  const videoRef = useRef();

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7;
    }
  }, []);

  return (
    <div className="cover-section-wrapper">
      <div className="cover-section-content-overlay">
        <div className="cover-section-content">
          <Button
            variant="navigation"
            label="Available"
            to="/services"
            bg="var(--dt-btn-pri-bg)"
            hoverBg="var(--dt-btn-pri-hover-bg)"
          />
          <div className="tagline">
            <span>Think</span>
            <span>Bold.</span>
            <span>Build</span>
            <span>Bedar.</span>
          </div>
          <div className="action-buttons">
            <Button
              variant="navigation"
              label="Sign a Project"
              to="/"
              fg="var(--dt-btn-sec-fg)"
              bg="var(--dt-btn-sec-bg)"
              hoverFg="var(--dt-btn-sec-fg"
              hoverBg="var(--dt-btn-sec-hover-bg)"
            />
            <Button variant="navigation" label="View Portfolio" to="/about" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoverSection;
