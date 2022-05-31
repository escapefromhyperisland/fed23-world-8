
const RHYME_API_BASE_URL = "https://rhymebrain.com/talk?function=getRhymes&word=";

export function checkRhymeFromAPI(word) {
  fetch(`${RHYME_API_BASE_URL}${word}`, {
    headers: {
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
