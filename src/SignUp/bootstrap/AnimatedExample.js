import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample({ progress }) {

console.log('aa:' + progress)
  return (
    <div>
      <ProgressBar animated now={progress} /> 
      {/*15, 40, 65, 90*/}
    </div>
  );
}

export default AnimatedExample;

