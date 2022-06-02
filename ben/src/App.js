import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Story, Rhyme } from "./pages/index.js"

const App = () => {
  const [storyInfo, setStoryInfo] = useState({text: "Intro text", url:"/", index: 1 })

  return (
    <main>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Story storyInfo={storyInfo} setStoryInfo={setStoryInfo} />} />
          <Route path="/rhyme" element={<Rhyme setStoryInfo={setStoryInfo} />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
