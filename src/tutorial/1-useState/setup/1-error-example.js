import React, { useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState("hello world")
  const handleClick = () => {
    if (text == "hello world") {
      setText('Hello Sanya')
    } else {
      setText("hello world")
    }
  }

  return (
    <React.Fragment>
      <h1>{text}</h1>
      <btn className="btn" onClick={handleClick}>change button</btn>
    </React.Fragment>
  )
}

export default ErrorExample;
