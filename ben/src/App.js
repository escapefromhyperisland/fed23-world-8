import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Story, Pattern, Rhyme, Anagram } from "./pages/index.js"

const App = () => {
  const [storyInfo, setStoryInfo] = useState({text: "You look out the window and see verdant forests and vast swaths of farmlands surrounding a... castle? Damn, you haven't jumped far enough. No problem, you can reprogram the tidbana and jump again. Before you get the chance however, a shadow passes overhead and a mighty roar shakes the entire carriage...", url:"/", index: 1 })

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story storyInfo={storyInfo} setStoryInfo={setStoryInfo} />} />
          <Route path="/pattern" element={<Pattern setStoryInfo={setStoryInfo} />} />
          <Route path="/rhyme" element={<Rhyme storyInfo={storyInfo} setStoryInfo={setStoryInfo} />} />
          <Route path="/anagram" element={<Anagram setStoryInfo={setStoryInfo} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
