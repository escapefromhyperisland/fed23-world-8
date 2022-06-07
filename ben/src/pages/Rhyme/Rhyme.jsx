import React, { useEffect, useState } from 'react';
import { getRhymesFromAPI } from '../../scripts/api';
import { useNavigate } from 'react-router-dom';

const Rhyme = ( {setStoryInfo} ) => {
  const navigate = useNavigate();
  const [rapLines, setRapLines] = useState([
    {
      text: 'Wow you smell, the future must stink!',
      rhyme: 'stink',
    },
    {
      text: "I can't look at you, my eyes have taken all they can!",
      rhyme: 'can',
    },
    {
      text: 'Every word out your mouth is a moronic lie!',
      rhyme: 'lie',
    },
  ]);

  const [line, setLine] = useState({
    text: '',
    rhyme: '',
  });

  const [possibleRhymes, setPossibleRhymes] = useState();
  const [lineCount, setLineCount] = useState(0);
  const [counter, setCounter] = useState(20);

  useEffect(() => {
    const timer =
      counter > -1 && setInterval(() => setCounter(counter - 1), 1000);
    if (counter === -1){
      console.log('Time up, restart');
      setStoryInfo({text: 'Dragon game fail. Try again?', url: '/', index: 3});
      navigate('/')
    } else {
      return () => clearInterval(timer);
    }
  }, [counter]);

  useEffect(() => {
    setRapLines(rapLines.sort(() => Math.random() - 0.5));
    goToNextLine();
  }, []);

  function goToNextLine() {
    if (lineCount < rapLines.length) {
      setLine(rapLines[lineCount]);
      setLineCount(lineCount + 1);
    } else {
      console.log('Go to next level');
      setStoryInfo({text: 'Dragon game success!', url: '/', index: 4});
      navigate('/');
    }
  }

  useEffect(() => {
    getRhymesFromAPI(line.rhyme, setPossibleRhymes);
  }, [line]);


  useEffect(() => {
    console.log(possibleRhymes)
  }, [possibleRhymes]);





  function checkRhyme(e) {
    e.preventDefault();
    const splitWords = e.target[0].value.split(' ');
    const word = splitWords[splitWords.length - 1];
    e.target[0].value = '';
    let wordRhymes = false;

    console.log(word, ' and ', line.rhyme);
    

    possibleRhymes.forEach((rhyme) => {
      if (word === rhyme.word && word !== line.rhyme && rhyme.score > 250) {
        wordRhymes = true;
      }
    });

    if (wordRhymes) {
      console.log('Rhymes!');
      goToNextLine();
      setCounter(20);
    } else {
      console.log('Does not rhyme, restart');
      setStoryInfo({text: 'Dragon game fail. Try again?', url: '/', index: 3});
      navigate('/')
    }
  }

  const counterStyle = (counter * 5) + '%';

  return (
    <div id="rhyme-bg">
      <section className="level-container">
        <p className="rap-line">{line.text}</p>
        <img src="/assets/images/king.png" alt="King" />
        <div className="timer-container">
          <div className="timer-bar" style={{width:counterStyle}}>
          </div>
        </div>
        <form onSubmit={checkRhyme}>
          <input type="text" autoComplete="off" autoFocus={true} id="word" name="word" />
        </form>
      </section>
    </div>
  );
};

export default Rhyme;
