import React, { useEffect } from 'react';
import { checkRhymeFromAPI } from "../../scripts/api"

const Rhyme = () => {
  let word = "happy";
  

  useEffect(() => {
    checkRhymeFromAPI(word);
  }, [word]);

    return(
      <h1>Rhyme test</h1>
    )
}

export default Rhyme;