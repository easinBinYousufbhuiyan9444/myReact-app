import React, { useState } from 'react';

const Content = () => {
  const [displayText, setDisplayText] = useState('');

  const handleButtonClick = () => {
    setDisplayText(document.getElementById('textArea').value);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Display Text</button>
      <br />
      <textarea id="textArea" rows="4" cols="50" placeholder="Type your text here"></textarea>
      <br />
      {displayText && <p>{displayText}</p>}
    </div>
  );
};

export default Content;
