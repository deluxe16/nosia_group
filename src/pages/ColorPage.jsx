import { useParams, useNavigate } from 'react-router-dom'
import { colors } from '../data/colors'
import './ColorPage.css'

export default function ColorPage() {
  const { name } = useParams()
  const navigate = useNavigate()
  const color = colors.find((c) => c.name === name)

  if (!color) {
    return (
      <div className="cp-not-found">
        <p>Color not found.</p>
        <button onClick={() => navigate('/')}>← Back to Palette</button>
      </div>
    )
  }

  const currentIndex = colors.findIndex((c) => c.name === name)
  const prev = colors[currentIndex - 1]
  const next = colors[currentIndex + 1]

  return (
    <div
      className="cp-root"
      style={{ backgroundColor: color.hex, color: color.textColor }}
    >
      {/* ── Back button ── */}
      <button
        className="cp-back"
        style={{ color: color.textColor, borderColor: color.textColor }}
        onClick={() => navigate('/')}
      >
        ← Palette
      </button>

      {/* ── Main content ── */}
      <div className="cp-content">
        <div className="cp-swatch" style={{ backgroundColor: color.hex }} />
        <h1 className="cp-name" style={{ color: color.textColor }}>
          {color.label}
        </h1>
        <p className="cp-description" style={{ color: color.textColor }}>
          {color.description}
        </p>

        <div className="cp-codes">
          <div className="cp-code-chip" style={{ borderColor: color.textColor }}>
            <span className="cp-code-label" style={{ color: color.textColor }}>
              HEX
            </span>
            <span className="cp-code-value" style={{ color: color.textColor }}>
              {color.hex}
            </span>
          </div>
          <div className="cp-code-chip" style={{ borderColor: color.textColor }}>
            <span className="cp-code-label" style={{ color: color.textColor }}>
              RGB
            </span>
            <span className="cp-code-value" style={{ color: color.textColor }}>
              {color.rgb}
            </span>
          </div>
        </div>
      </div>

      {/* ── Navigation strips ── */}
      <div className="cp-nav-strips">
        {prev && (
          <button
            className="cp-nav-btn"
            style={{ backgroundColor: prev.hex }}
            onClick={() => navigate(`/color/${prev.name}`)}
          >
            <span style={{ color: prev.textColor }}>← {prev.label}</span>
          </button>
        )}
        {next && (
          <button
            className="cp-nav-btn"
            style={{ backgroundColor: next.hex }}
            onClick={() => navigate(`/color/${next.name}`)}
          >
            <span style={{ color: next.textColor }}>{next.label} →</span>
          </button>
        )}
      </div>

      {/* ── Palette minimap ── */}
      <div className="cp-minimap">
        {colors.map((c) => (
          <button
            key={c.name}
            className={`cp-mini-strip${c.name === name ? ' active' : ''}`}
            style={{ backgroundColor: c.hex }}
            onClick={() => navigate(`/color/${c.name}`)}
            title={c.label}
          />
        ))}
      </div>
    </div>
  )
}
