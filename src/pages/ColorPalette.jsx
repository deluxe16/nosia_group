import { useNavigate } from 'react-router-dom'
import { colors } from '../data/colors'
import './ColorPalette.css'

export default function ColorPalette() {
  const navigate = useNavigate()

  return (
    <div className="palette-wrapper">
      <div className="palette-container">
        {colors.map((color, index) => (
          <button
            key={color.name}
            className="color-strip"
            style={{ backgroundColor: color.hex }}
            onClick={() => navigate(`/color/${color.name}`)}
            aria-label={`Navigate to ${color.label} color page`}
          >
            {color.dashColor && (
              <div
                className="dash-link-container"
                onClick={(e) => {
                  e.stopPropagation();
                  if (color.externalLink) {
                    window.open(color.externalLink, '_blank');
                  }
                }}
              >
                <span className="hover-scale-item strip-custom-label">
                  {color.label}
                </span>
                <div className="hover-scale-item dash-item">
                  <div
                    className="strip-dash-line"
                    style={{ backgroundColor: color.dashColor }}
                  />
                </div>
              </div>
            )}
            <div className="strip-hover-overlay" />
          </button>
        ))}
      </div>
    </div>
  )
}
