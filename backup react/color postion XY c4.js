import logo from './logo.svg';
import './App.css';
import { useState } from 'react'; 
function PainDot(){
  const [pos, setPos] = useState({});
  const styles = {
    position:"absolute",
    top: "0px",
    left:"0px",
    height: "100px",
    aspectRatio:"1/1",
    borderRadius:"50%",
    background:"pink",
    transform: "translateX(-50%) translateY(-50%)",
  };
  return (
    <div 
    onTouchStart={(event)=> setPos(event.changedTouches[0])}
    className="dot-container"
    >
      <h1>X: {pos.pageX}</h1>
      <h1>Y: {pos.pageY}</h1>
      <div style={styles}></div>
      </div>
  );
}
export default PainDot;