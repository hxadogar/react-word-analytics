import { useState } from 'react'

import TextField from './TextField.jsx'
import Stats from './Stats'

export default function MainContainer() {
  const [text, setText] = useState('')
  const [warning, setWarning] = useState('')

  const countChar = () => {
    return text.length
  }

  const countWord = () => {
    return text.split(' ').filter(word => (word !== '')).length
  }

  const countSocialMedia = (total) => {
    return { count: total - text.length, limit: total <= text.length }
  }

  // some basic validation
  if (text.includes("<script")) {
    let newText = text.replace("<script", "");
    setText(newText)
    setWarning('No Script tag allowed')
  }
  if (text.includes("@")) {
    let newText = text.replace("@", "");
    setText(newText)
    setWarning('No @ Symbol allowed')
  }

  return (
    <main className="container">
      <TextField text={text} setText={setText} warning={warning} setWarning={setWarning}/>
      <Stats
        countChar={countChar()}
        countWord={countWord()}
        countInstragram={countSocialMedia(280)}
        countFacebook={countSocialMedia(2200)}
      />
    </main>
  )
};