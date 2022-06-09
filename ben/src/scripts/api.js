
const RHYME_API_BASE_URL = "https://rhymebrain.com/talk?function=getRhymes&word=";

export function getRhymesFromAPI(rhyme, setPossibleRhymes) {
  fetch(`${RHYME_API_BASE_URL}${rhyme}`, {
    headers: {
    },
  })
    .then((response) => {
        return response.json();
    })
    .then((result) => {
        setPossibleRhymes(result);
    })
    .catch((err) => {
      console.error(err);
    });
}
