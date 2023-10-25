import ProgressBar from 'react-bootstrap/ProgressBar';

// 부트스트랩으로 받아온 상단 바
function AnimatedExample({ progress }) {

  return (
    <div>
      <ProgressBar animated now={progress} /> 
      {/*15, 40, 65, 90*/}
    </div>
  );
}

export default AnimatedExample;

