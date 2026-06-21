import { useState } from "react"
import "./App.css"

function Flashcards({flash}) {
    const [isFlipped, setIsFlipped] = useState(true)
    const [currFC, setCurrFC] = useState(0)
    const [fcGuess, setFcGuess] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const maxLen = flash.length - 1
    const minLen = 0
    console.log(flash)
    const setFlip = () => {
        setIsFlipped(!isFlipped)
    }
    const changeFCLeft = () => {
        setIsFlipped(true)
        setCurrFC(currFC-1)
        setFcGuess("")
        setIsSubmitted(false)
        
        
        
    }
    const changeFCRight = () => {
        setIsFlipped(true)
        setCurrFC(currFC + 1)
        setFcGuess("")
        setIsSubmitted(false)
        
        
        
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const formData = new FormData(form)
        const formJson = Object.fromEntries(formData.entries() )
        setFcGuess(formJson["fc-guess"])
        setIsSubmitted(true)
        
    }
    
    return (
        <div className="holder">
            <div className="Box"  onClick={setFlip}>
                <div className="FC" >
                    <p>{isFlipped? flash[currFC].question : flash[currFC].answer}</p>
                </div>
            </div>
            <div className="input">
                <form method="post" onSubmit={handleSubmit}>
                <label>
                    Guess Here: <input style={{ borderStyle: "solid", borderColor: isSubmitted && fcGuess != ""? 
                    fcGuess == flash[currFC].answer ? "green" : "red": ""}} value={fcGuess} name="fc-guess" onChange={(e) => {setFcGuess(e.target.value); setIsSubmitted(false);} } />
                </label>
                <button type="submit">Submit</button>
                </form>
              

            </div>
            <div >
                {isSubmitted && fcGuess != ""? 
                    fcGuess == flash[currFC].answer ? <p className="correct">Correct!</p> : <p>Try Again!</p> : <p></p>}
            </div>
            <div className="buttons">
                <button onClick={changeFCLeft} disabled={currFC - 1 < 0}>{"<="}</button>
                <button onClick={setFlip}>Flip</button>
                <button onClick={changeFCRight} disabled={currFC + 1 > flash.length - 1}>{"=>"}</button>
            </div>
        </div>
    )
}
export default Flashcards