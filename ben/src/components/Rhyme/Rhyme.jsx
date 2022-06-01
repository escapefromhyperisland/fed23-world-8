import React, { useEffect, useState } from 'react';
import { getRhymesFromAPI } from '../../scripts/api';

const Rhyme = () => {
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

  const [possibleRhymes, setPossibleRhymes] = useState([]);
  const [lineCount, setLineCount] = useState(0);

  useEffect(() => {
    setRapLines(rapLines.sort(() => Math.random() - 0.5));
    goToNextLine();
  }, []);

  function goToNextLine() {
    if (lineCount < rapLines.length) {
      setLine(rapLines[lineCount]);
      setLineCount(lineCount + 1);
    } else {
      console.log("Go to next level")
    }
  }

  useEffect(() => {
      getRhymesFromAPI(line.rhyme, setPossibleRhymes);
  }, [line]);

  function checkRhyme(e) {
    e.preventDefault();
    const splitWords = e.target[0].value.split(" ");
    const word = splitWords[splitWords.length - 1];
    e.target[0].value = "";
    let wordRhymes = false;

    console.log(word, " and ", line.rhyme);

    possibleRhymes.forEach((rhyme) => {
      if (word === rhyme.word && word !== line.rhyme && rhyme.score > 250){
        wordRhymes = true;
      }
    });

    if (wordRhymes) {
      console.log("Rhymes!");
      goToNextLine();
    } else {
      console.log("Does not rhyme, restart");
    }
  }

  return (
    <section>
      <h1>Rhyme Test</h1>
      <p>{line.text}</p>
      <form onSubmit={checkRhyme}>
        <input type="text" id="word" name="word" />
      </form>
    </section>
  );
};

export default Rhyme;
