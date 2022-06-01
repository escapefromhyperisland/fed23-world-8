import { Rhyme } from "./components/index.js"

//Add a use effect here to query the rhyme database each time the input is clicked and compare the last word of each sentence

const App = () => {
  return (
    <main className="App">
      <Rhyme />
    </main>
  );
}

export default App;
