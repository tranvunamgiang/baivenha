import logo from './logo.svg';
import './App.css';
function PainDot(){
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
    <div className='dot-container'>
      <div style={styles}></div>
    </div>
  );
}
export default PainDot;