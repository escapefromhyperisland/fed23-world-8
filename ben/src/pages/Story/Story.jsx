import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Story = ({ storyInfo, setStoryInfo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (storyInfo.index === 1) {
    setStoryInfo({text: 'Dragon game info', url: '/', index: 2});
    navigate(storyInfo.url);
    } else if (storyInfo.index === 2 || storyInfo.index === 3) {
      navigate('/rhyme');
    } else if (storyInfo.index === 4) {
      setStoryInfo({text: 'You won the game! This will lead to the next level...', url: '/', index: 5});
    }
  }

  return (
    <section className="story-container" onClick={handleClick}>
      <div className="story-text-box">
        <p className="story-text">{storyInfo.text}</p>
        <p className="continue-text">Click to continue...</p>
      </div>
    </section>
  );
};

export default Story;
