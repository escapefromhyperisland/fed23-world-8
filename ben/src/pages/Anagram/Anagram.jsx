import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Anagram = ( {setStoryInfo} ) => {
  const navigate = useNavigate();
  const [anagrams, setAnagrams] = useState([
    {
      text: 'This is a stet!',
      answer: "test",
    },
    {
      text: "Make some gmigc!",
      answer: "magic",
    },
    {
      text: 'Lend me the rpewo of the ancients!',
      answer: "power",
    },
  ]);

  const [counter, setCounter] = useState(20);
  const [lineCount, setLineCount] = useState(0);
  const [line, setLine] = useState({
    text: '',
    answer: '',
  });

  useEffect(() => {
    const timer =
      counter > -1 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === -1){
      console.log('Time up, restart');
      setStoryInfo({text: 'Anagram game fail. Try again?', index: 9});
      navigate('/')
    } else {
      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    setAnagrams(anagrams.sort(() => Math.random() - 0.5));
    goToNextLine();
  }, []);

  function goToNextLine() {
    if (lineCount < anagrams.length) {
      setLine(anagrams[lineCount]);
      setLineCount(lineCount + 1);
    } else {
      console.log('Go to next level');
      setStoryInfo({text: 'Anagram game success!', index: 10});
      navigate('/');
    }
  }

  function checkAnagram(e) {
    e.preventDefault();
    const input = e.target[0].value;

    e.target[0].value = '';

    if (input === line.answer) {
      console.log('Correct!');
      goToNextLine();
      setCounter(20);
    } else {
      console.log('Incorrect, restart');
      setStoryInfo({text: 'Anagram game fail. Try again?', index: 9});
      navigate('/')
    }
  }

  const counterStyle = (counter * 5) + '%';

  return (
    <div id="anagram-bg">
      <section className="level-container">
        <p className="rap-line">{line.text}</p>
        <img src="/assets/images/wizard.png" alt="Wizard" />
        <div className="timer-container">
          <div className="timer-bar" style={{width:counterStyle}}>
          </div>
        </div>
        <form onSubmit={checkAnagram}>
          <input type="text" autoComplete="off" autoFocus={true} id="word" name="word" />
        </form>
      </section>
    </div>
  );
};

export default Anagram;
