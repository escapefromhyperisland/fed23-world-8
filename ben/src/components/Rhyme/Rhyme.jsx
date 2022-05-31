import React, { useEffect, useState } from 'react';
import { checkRhymeFromAPI } from "../../scripts/api"

const Rhyme = () => {
  const [word, setWord] = useState("");

  function updateWord(e) {
    e.preventDefault();
    setWord(e.target[0].value);
    console.log(word);
  }

  useEffect(() => {
    checkRhymeFromAPI(word);
    console.log("Word was updated");
  }, [word]);

    return(
      <section>
        <h1>Rhyme Test</h1>
        <form onSubmit={updateWord}>
          <input type="text" id="word" name="word" />
        </form>
      </section>
    )
}

export default Rhyme;