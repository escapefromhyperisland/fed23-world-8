import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Anagram = ( {setStoryInfo} ) => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const timer =
      counter > -1 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === -1){
      console.log('Time up, restart');
      setStoryInfo({text: 'Wizard game fail. Try again?', url: '/', index: 9});
      navigate('/')
    } else {
      return () => clearInterval(timer);
    }
  }, [counter]);


  const counterStyle = (counter * 5) + '%';

  return (
    <div id="anagram-bg">
      <section className="level-container">

      </section>
    </div>
  );
};

export default Anagram;
