import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample() {
  return (
    <div>
      <ProgressBar animated now={15} />  
      {/*15, 40, 65, 90*/}
    </div>
  );
}

export default AnimatedExample;