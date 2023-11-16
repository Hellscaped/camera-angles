import './App.css'
import ImageCard from './ImageCard'

function App() {
  return (
    <>
      <div>
      </div>
      <h1>Camera Angles</h1>
      <h2>GTA</h2>
      <div className="card">
        <ImageCard src="pov.jpg" desc="POV"></ImageCard>
        <ImageCard src="overtheshoulder.jpg" desc="Over the shoulder"></ImageCard>
        
      </div>
    </>
  )
}

export default App
