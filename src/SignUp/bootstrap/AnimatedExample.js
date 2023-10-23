import { useEffect, useState } from 'react';
import ProgressBar from 'react-bootstrap/ProgressBar';

function AnimatedExample(progress) {
  const [changeProgress, setChangeProgress] = useState(progress);

  useEffect(() => {
    setChangeProgress(progress);
  }, [progress]);

  return (
    <div>
      <ProgressBar animated now={changeProgress} />  
      {/*15, 40, 65, 90*/}
    </div>
  );
}

export default AnimatedExample;

