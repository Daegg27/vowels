import { useState } from 'react'
import reactLogo from './assets/react.svg'
import InputField from './components/inputfield';
import SubmitButton from './components/submitbutton';
import './App.css'
import DisplayWord from './components/displayword';

function App() {
    
  // Use an array for the state so that we can keep a list of all words entered
  const [word, setWord] = useState([])
  
  // Takes the input from the text box and adds it to the word list whenever the submit button is pressed
  const targetWord = () => {
      let newWord = document.getElementById('input').value
      let newData = [...word, newWord]
      setWord(newData)
  }
  

  return (
      <div className='App'>
          <h1>React Vowels</h1>
          <InputField />
          <SubmitButton handleClick={targetWord}/>    
          <div>
              <DisplayWord word={word} /> 
          </div>
      </div>
  )
}

export default App
