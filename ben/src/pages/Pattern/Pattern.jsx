import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Pattern = ( {setStoryInfo} ) => {
  const navigate = useNavigate();
  const [patterns, setPatterns] = useState([
    {
      text: '1, 2, 3, 4, 5, 6, ?, 8',
      answer: 7,
    },
    {
      text: "3, ?, 9, 12, 15",
      answer: 6,
    },
    {
      text: '5, 9, 6, 10, 7, ?, 7, 12',
      answer: 11,
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
      setStoryInfo({text: 'Pattern game fail. Try again?', index: 3});
      navigate('/')
    } else {
      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    setPatterns(patterns.sort(() => Math.random() - 0.5));
    goToNextLine();
  }, []);

  function goToNextLine() {
    if (lineCount < patterns.length) {
      setLine(patterns[lineCount]);
      setLineCount(lineCount + 1);
    } else {
      console.log('Go to next level');
      setStoryInfo({text: 'Pattern game success!', index: 4});
      navigate('/');
    }
  }

  function checkPattern(e) {
    e.preventDefault();
    const input = e.target[0].value;

    e.target[0].value = '';

    if (parseInt(input) === line.answer) {
      console.log('Correct!');
      goToNextLine();
      setCounter(20);
    } else {
      console.log('Incorrect, restart');
      setStoryInfo({text: 'Dragon game fail. Try again?', index: 3});
      navigate('/')
    }
  }

  const counterStyle = (counter * 5) + '%';

  return (
    <div id="pattern-bg">
      <section className="level-container">
        <p className="rap-line">{line.text}</p>
        <img src="/assets/images/dragon.png" alt="Dragon" />
        <div className="timer-container">
          <div className="timer-bar" style={{width:counterStyle}}>
          </div>
        </div>
        <form onSubmit={checkPattern}>
          <input type="text" autoComplete="off" autoFocus={true} id="word" name="word" />
        </form>
      </section>
    </div>
  );
};

export default Pattern;
