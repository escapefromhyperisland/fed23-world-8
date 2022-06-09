import React from 'react';
import { useNavigate } from 'react-router-dom';

const Story = ({ storyInfo, setStoryInfo }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (storyInfo.index === 1) {
      setStoryInfo({text: "Holy crap, there's a dragon on the roof!", index: 2});
      navigate('/');
    } else if (storyInfo.index === 2 || storyInfo.index === 3) {//Dragon intro or dragon fail
      navigate('/pattern');
    } else if (storyInfo.index === 4) {//Dragon success
      setStoryInfo({text: "You need to defeat the king in a rap battle.", index: 5});
    } else if (storyInfo.index === 5 || storyInfo.index === 6) {//King intro or King fail
      navigate('/rhyme');
    } else if (storyInfo.index === 7) {//Rhyme success
      setStoryInfo({text: "The wizard needs help to cast his spell!", index: 8});
    } else if (storyInfo.index === 8 || storyInfo.index === 9) {//Wizard intro or Wizard fail
      navigate('/anagram');
    } else if (storyInfo.index === 10) {//Wizard Success
      setStoryInfo({text: "The game has been completed", index: 11});
    } else if (storyInfo.index === 11) {
      window.parent.postMessage('nextLevel');
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
