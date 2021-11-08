import React, { useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState('Hellow')

  const Change = () => {
    if (text == "Hellow") {
      setText("Goodby")
    } else {
      setText('Hellow')
    }

  }
  return (
    <React.Fragment>
      <h1>{text}</h1>
      <button className="btn" onClick={Change}>exchange button</button>
    </React.Fragment>
  )
}

export default ErrorExample;
