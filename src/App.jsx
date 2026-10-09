import { Routes, Route } from 'react-router-dom'
import ColorPalette from './pages/ColorPalette'
import ColorPage from './pages/ColorPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<ColorPalette />} />
      <Route path="/color/:name" element={<ColorPage />} />
    </Routes>
  )
}

export default App
