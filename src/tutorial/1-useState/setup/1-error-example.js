import React, { useState } from 'react';

const ErrorExample = () => {
  const [text, setText] = useState("hello world")

  const ChangeTitle = () => {
    if (text == "hello world") {
      setText("Hi Sanya")
    } else {
      setText("hello world")
    }

  }


  return (
    <section>
      <h1>{text}</h1>
      <button className="btn" onClick={ChangeTitle}>
        change button
      </button>
    </section>
  )
}



























// const ErrorExample = () => {
//   const [text, setText] = useState("hello world")
//   const handleClick = () => {
//     if (text == "hello world") {
//       setText('Hello Sanya')
//     } else {
//       setText("hello world")
//     }
//   }

//   return (
//     <React.Fragment>
//       <h1>{text}</h1>
//       <btn className="btn" onClick={handleClick}>change button</btn>
//     </React.Fragment>
//   )
// }

export default ErrorExample;
