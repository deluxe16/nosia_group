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
                style={{
                  position: 'absolute',
                  bottom: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  zIndex: 10,
                }}
              >
                <span 
                  className="hover-scale-item" 
                  style={{ color: '#FDF5E6', fontSize: '11px', fontFamily: 'Inter, system-ui, sans-serif', padding: '4px', whiteSpace: 'nowrap', fontWeight: 'bold' }}
                >
                  {color.label}
                </span>
                <div className="hover-scale-item dash-item" style={{ padding: '4px' }}>
                  <div
                    style={{
                      backgroundColor: color.dashColor,
                      width: '12px',
                      height: '2px',
                      borderRadius: '1px'
                    }}
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
