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
        <ImageCard src="wide.png" desc="Wide Angle"></ImageCard>
        <ImageCard src="long.png" desc="Long Angle"></ImageCard>
        <ImageCard src="medium.jpg" desc="Medium Angle"></ImageCard>
        <ImageCard src="cowboy.jpg" desc="Cowboy Angle"></ImageCard>
        <ImageCard src="tight.jpg" desc="Tight Angle"></ImageCard>
        <ImageCard src="detail.jpg" desc="Detail Angle"></ImageCard>
        <ImageCard src="low.jpg" desc="Low Angle"></ImageCard>
        <ImageCard src="high.jpg" desc="High Angle"></ImageCard>
        <ImageCard src="dutch.png" desc="Dutch Angle"></ImageCard>
        <ImageCard src="overtheshoulder.jpg" desc="Over the shoulder"></ImageCard>
        <ImageCard src="pov.jpg" desc="POV"></ImageCard>
      </div>
    </>
  )
}

export default App
